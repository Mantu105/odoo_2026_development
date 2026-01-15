{
    'name': "Toggle Debug Mode On",
    'version': '19.0.0.0.1',
    'category': 'Tools',
    'author': "Mantu Raj",
    'website': "https://www.linkedin.com/in/mantu105/",
    'license': "AGPL-3",
    'summary': """Toggle to debug mode in the top right user menu, just one click!""",
    'description': """Toggle to debug mode in the top right user menu, just one click!""",
    'depends': ['base','web',],
    'assets': {
        'web.assets_backend': [
             "toggle_developer_mode_on/static/src/js/debug_mode.js",
            "toggle_developer_mode_on/static/src/xml/debug_mode.xml",
        ],
    },
    'images': ['static/description/banner.png'],
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
