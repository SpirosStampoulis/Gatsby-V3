import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"

const Menu = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: {eq: "main-nav-drop"}) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                ... on WpCategory {
                  id
                  uri
                  taxonomy {
                    node  {
                      name
                    }
                  }
                  name
                }
              }
            }
            childItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <nav
      className="primary-menu-wrapper"
      aria-label="Horizontal"
      role="navigation"
    >
      <ul className="primary-menu reset-list-style">
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = "menu-item-" + menuItem.databaseId

          return (
            <li
              id={itemId}
              key={i + menuItem.url}
              className={
                "menu-item menu-item-type-custom menu-item-object-custom menu-item-home " +
                itemId
              }
            >
              <UniversalLink
                to={path}
                activeClassName={"current-menu-item current_page_item"}
              >
                {menuItem.label}
              </UniversalLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
