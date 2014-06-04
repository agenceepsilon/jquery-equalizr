module.exports = {
    options: {
        banner: '/** ' +
        '* jQuery Equalizr (https://github.com/agenceepsilon/jquery-equalizr)' +
        '*' +
        '* @version <%= pkg.version %>' +
        '* @author Agence Epsilon (http://www.agenceepsilon.com)' +
        '*' +
        '* @copyright 2014 Agence Epsilon' +
        '* @license MIT (http://www.opensource.org/licenses/mit-license.php)' +
        '*' +
        '*/'
    },
    my_target: {
        files: {
            'jquery.equalizr.min.js': [
                'jquery.equalizr.js'
            ]
        }
    }
};