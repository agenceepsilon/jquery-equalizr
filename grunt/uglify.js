// ============================================================================================= //
//                                        GRUNT - UGLIFY                                         //
// ============================================================================================= //

module.exports = {
    options: {
        banner: '/**\n' +
        '* jQuery Equalizr (https://github.com/agenceepsilon/jquery-equalizr)\n' +
        '*\n' +
        '* @version <%= package.version %>\n' +
        '* @author Agence Epsilon (http://www.agenceepsilon.com)\n' +
        '*\n' +
        '* @copyright 2014 Agence Epsilon\n' +
        '* @license MIT (http://www.opensource.org/licenses/mit-license.php)\n' +
        '*\n' +
        '*/\n'
    },

    js: {
        files: {
            '<%= dist %>/jquery.equalizr.min.js': '<%= dist %>/jquery.equalizr.js'
        }
    }
};