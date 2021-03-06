import React from 'react';
import headerBackground from '../../../images/headerBackground.jpg';
// import PropTypes from 'prop-types';

import './header.module.scss';
// import Breadcrumbs from '~atoms/breadcrumbs';
// import Author from '~atoms/author';
// import { imagePrettyUrl, getSectionExtraField } from '~helpers/getters';

/* eslint-disable camelcase, react/no-danger */
const Header = ({ section, content = null, backgroundImage = true }) => {
//   const { header } = section.page.sections;
//   const backgroundImageValue = section.page.sections?.header?.extra_fields?.header_background_image;
//   const uploadedBg = imagePrettyUrl(backgroundImageValue);
return (

//   let backgroundImg = (
    <picture className="headerImage">
      {/* <source
        media="(min-width: 768px)"
        srcSet="/images/headerBackground.webp 1440w"
        type="image/webp"
      />
      <source srcSet="../../../../images/headerBackgroundMob.webp 370w" type="image/webp" /> */}
      <img src={headerBackground} alt="header" />
    </picture>
//   );
//   if (backgroundImageValue) {
//     backgroundImg = <img src={uploadedBg} alt="header" className={styles.headerImage} />;
//   }

//   const headerContent = () => {
//     if (content) {
//       return content;
//     }

//     const headerText = getSectionExtraField(null, header, 'header_text');
//     const innerBannerHTML = () => {
//       const formatInnerHTML = {
//         __html: headerText,
//       };
//       return formatInnerHTML;
//     };

//     return <div dangerouslySetInnerHTML={innerBannerHTML()} />;
/* <>test</> */
)
  };

//   return (
    // <header className={styles.header}>
//       {backgroundImage && backgroundImg}
//       <div
//         className={`${styles.headerContent} ${styles[section.page.template]} ${
//           !content && styles.default
//         }`}
//       >
//         <div className={styles.topSection}>
//           {section.page.path && <Breadcrumbs page={section.page} />}
//           {section.page.path !== '/' && section.page.path !== 'contact-us' && section.page.author && (
//             <div className={styles.authorContainer}>
//               <Author
//                 authorProfile={section.page.author?.profile_page_path}
//                 name={section.page.author?.name}
//                 date={section.page.updated_at ? section.page.updated_at : section.page.created_at}
//               />
//             </div>
//           )}
//         </div>

//         {section.page.template !== 'author' &&
//           section.page.template !== 'article_detail' &&
//           section.page.template !== 'article_casino' &&
//           section.page.template !== 'article_sports' &&
//           section.page.template !== 'game_review' && <h1>{section.page.title}</h1>}
//         <div className={!content && styles.headerText}>{headerContent()}</div>
//       </div>
    // </header>
//   );
// }

// Header.propTypes = {
//   content: PropTypes.element,
//   section: PropTypes.shape({
//     page: PropTypes.shape({
//       template: PropTypes.string,
//       path: PropTypes.string,
//       updated_at: PropTypes.string,
//       created_at: PropTypes.string,
//       author: PropTypes.shape({
//         name: PropTypes.string,
//         profile_page_path: PropTypes.string,
//       }),
//       sections: PropTypes.shape({
//         header: PropTypes.shape({
//           extra_fields: PropTypes.shape({
//             header_background_image: PropTypes.oneOfType([
//               PropTypes.string,
//               PropTypes.shape({
//                 value: PropTypes.string,
//                 type: PropTypes.string,
//               }),
//             ]),
//             header_text: PropTypes.oneOfType([
//               PropTypes.string,
//               PropTypes.shape({
//                 value: PropTypes.string,
//                 type: PropTypes.string,
//               }),
//             ]),
//           }),
//         }),
//       }),
//       title: PropTypes.string,
//     }),
//   }).isRequired,
//   backgroundImage: PropTypes.bool,
// };

export default Header;
