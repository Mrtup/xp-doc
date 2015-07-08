function editor(c) {
    c.displayName = 'Modified';
    c.data.a++;
    c.data.z = '99';

    c.x['other'] = {
        name: 'test'
    };

    return c;
}

var result = execute('content.modify', {
    key: '/my/content',
    editor: editor
});

if (result) {
    log.info('Content modified. New title is ' + result.displayName);
} else {
    log.info('Content not found');
}