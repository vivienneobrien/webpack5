# Learning about Webpack5

## Table of Contents

1. [Asset Modules](#asset-modules)
2. [Loaders](#loaders)
3. [Webpack Plugins](#webpack-plugins)

### Asset Modules <a name="asset-modules"></a>

**asset/resource**: Generates a new file output for every file in the output directory for each of your assets and exports the url to that file. Use this one when importing large files

**asset/inline**: Generates a base64 representation of your assets and injects that base64 string into your main Javsacript bundle. Use this one when importing small files.

**asset**: Allows webpack to make this decision based on the size of each file. If the file size is less than 8 kilobytes then this file will be treated as an inline asset and if the file size is above then it will be treated as an asset/resource

### Loaders <a name="loaders"></a>

- Allows you to import any other type of files that you cant handle using asset modules. Webpack was designed to help you bundle all your dependencies into one or more files.
- What kind of dependencies are we talking about? Usually dependencies are other JS modules that your main JS file requires in order to do its job. But we can do so much more than that! With webpack, we can import css files right into your javascript code (you can import sass, less, xml etc).
- Loaders are js libraries that help you import all that stuff. When using asset modules we didnt have to use any additional npm packages because webpack includes asset modules out of the box on the other hand when using loaders we need to install them **explicitly**.
- Every webpack loader comes as an npm package that you can add as a dependency to your applicationOne of the coolest features of webpack is the ability to import css files right into your js code.
- Babbel is the most popular javascript compiler. Created a rule for importing js file but excludes those in node modules folder. Told webpack to use babel loader for these files. Need to specify some extra options for babel loader. `babel env` ES6 + to ES5. **Converts new EcmaScript(6+) to older EcmaScript(5) which is supported by all browsers**. If you want to use class which is not supported by some major browsers then use `class-properties`.

### Webpack Plugins <a name="webpack-plugins"></a>

- Plugins are additional javascript libraries that do everything a loaders cannot do.
- Plugins can also modify how the bundle themselves are created. For example uglify/SPlugin takes the bundle.js and minimises the contents to decrease the bundle size
