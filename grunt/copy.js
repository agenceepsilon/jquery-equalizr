// ============================================================================================= //
//                                         GRUNT - COPY                                          //
// ============================================================================================= //

module.exports = {
    main: {
        expand: true,
        cwd: '<%= src %>/',
        src: [
            'jquery.equalizr.js'
        ],
        dest: '<%= dist %>/'
    }
};