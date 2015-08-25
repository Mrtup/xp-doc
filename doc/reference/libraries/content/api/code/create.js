var lib = require('/lib/xp/content');

var result = lib.create({
        name: 'mycontent',
        parentPath: '/a/b',
        displayName: 'My Content',
        draft: true,
        contentType: 'test:myContentType',
        data: {
            a: 1,
            b: 2,
            c: ['1', '2'],
            d: {
                e: {
                    f: 3.6,
                    g: true
                }
            }
        },
        x: {
            "com-enonic-myapplication": {
                myschema: {
                    a: 1
                }
            }
        }
    });

log.info('Content created with id ' + result._id);
