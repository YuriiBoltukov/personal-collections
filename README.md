# PersonalCollections

## Project Description

PersonalCollections is a web application developed for managing personal collections such as books, post-stamps, coins, etc. It offers functionalities for both non-authenticated and authenticated users. Non-authenticated users have read-only access, while authenticated users, except admins, have access to all features except the admin-page. The admin-page allows user management, including viewing, blocking, unblocking, deleting, adding to admins, and removing from admins. Admins have elevated privileges, seeing all pages as their author and being able to manage collections and items across the platform. Only admins or creators of collections or items can manage them.

## Features and Requirements

- **User Authentication:** Users can register and authenticate via site forms.
- **Collection Management:** Users can create, delete, or edit collections. Each collection includes a name, description with markdown formatting support, topic/category, and an optional image uploaded by users into the cloud.
- **Item Management:** Users can add, edit, or delete items within collections. Items include fixed fields such as id, name, and tags, along with user-selectable additional fields like integer fields, string fields, multiline text fields, boolean checkboxes, and date fields.
- **Search Functionality:** The site provides full-text search across all pages, with search results displaying items or collections.
- **Main Page Features:** The main page includes lists of latest items, top 5 largest collections, and a tag cloud for easy navigation.
- **Comments and Likes:** Items can have comments and likes, with comments being linearly added to the end and updated automatically when new comments are added.
- **Multi-Language and Theme Support:** The site supports two languages (English and another selected by the user) and two visual themes (light and dark).
- **Technical Requirements:** CSS-framework for styling, support for different screen resolutions, adaptive design, ORM for data access, and a full-text search engine.

## Optional Requirements

Optional requirements include authentication via social networks, adding custom fields with the type "one from the given list," adding any number of custom fields of any kind, and exporting collections to CSV-files.

## Code Agreements

- **Modular Architecture:** The project follows a modular architecture, promoting code modularity and reusability.
- **Unidirectional Entity Relationships:** The relationships between entities are unidirectional, maintaining a clear and straightforward structure.

## Important Notes

- **Avoid Code Copying:** It's emphasized not to copy code from external sources but rather understand and implement solutions independently.
- **Use of Libraries:** Ready components, libraries, and controls are encouraged for implementing various functionalities.
- **Continuous Deployment:** Starting from a static "Hello, world" page, the project should be deployable at all stages of development.
- **Defend Your Work:** The developer should be prepared to defend their project, even if only a small part of it is completed.

## Conclusion

PersonalCollections aims to provide a robust platform for managing personal collections, adhering to specified requirements and technical agreements while emphasizing independent implementation and code quality.



# Setting up React with TypeScript and Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
