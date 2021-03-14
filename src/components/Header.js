import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./Menu"
import ToggleIcon from "../assets/svg/toggle.inline.svg"

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="site-header" className="header-footer-group" role="banner">
      <div className="header-inner section-inner">
        <div className="header-titles-wrapper">
          {/* <div className="header-titles">
            <h1 className="site-title">
              <Link
                to="/"
                dangerouslySetInnerHTML={{ __html: wp.generalSettings.title }}
              />
            </h1>
            <div
              className="site-description"
              dangerouslySetInnerHTML={{
                __html: wp.generalSettings.description,
              }}
            />
          </div>
          <button
            className="toggle nav-toggle mobile-nav-toggle"
            data-toggle-target=".menu-modal"
            data-toggle-body-class="showing-menu-modal"
            aria-expanded="false"
            data-set-focus=".close-nav-toggle"
            onClick={(e) => toggleBackdrop(e, true)}
          >
            <span className="toggle-inner">
              <span className="toggle-icon">
                <ToggleIcon />
              </span>
              <span className="toggle-text">Menu</span>
            </span>
          </button> */}
          <header role="banner" id="page-header">
            <div class="container">
                <div class="region region-header">
                    <section id="block-block-1" class="block block-block clearfix">
                        <h1><a href="/">Horse Racing Betting USA</a></h1>
                        <h3>Legal tracks wagering online for US players</h3>
                    </section>
                    <section id="block-search-form" class="block block-search clearfix">
                        <form role="search" method="get" class="search-form form" action="/">
                            <label for="form-search-input" class="sr-only">Search for</label>
                            <div class="input-group">
                                <input type="search" id="form-search-input" class="form-control search-field" placeholder="Search …" value="" name="s" title="Search for:"/>
                                <span class="input-group-btn">
                                    <button type="submit" class="btn btn-default blue-search-btn"><span class="icon glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                </span>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </header>
        </div>
        <div className="header-navigation-wrapper">
          <Menu />
          {/* <div className="header-toggles hide-no-js">
            <div className="toggle-wrapper nav-toggle-wrapper has-expanded-menu">
              <button
                className="toggle nav-toggle desktop-nav-toggle"
                data-toggle-target=".menu-modal"
                data-toggle-body-class="showing-menu-modal"
                aria-expanded="false"
                data-set-focus=".close-nav-toggle"
                onClick={(e) => toggleBackdrop(e, true)}
              >
                <span className="toggle-inner">
                  <span className="toggle-text">Menu</span>
                  <span className="toggle-icon">
                    <ToggleIcon />
                  </span>
                </span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
