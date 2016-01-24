var path = require('path');
var ghpages = require('gulp-gh-pages');

ghpages.publish(path.join(__dirname, 'example'));
