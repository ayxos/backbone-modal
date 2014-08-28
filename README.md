backbone-modal
==============

A simple modal component for backbone

live version = http://ayxos.com/backbone-modal/

using:
- bower (to get deps)
- Grunt (generate index.html/Css files and jade-js converter)
- require
- jade (as template engine)
- jquery
- Backbone

![ScreenShot](http://i58.tinypic.com/wulzt4.png)

Install using bower
====================
```
bower install backbone-modal
```

- *need RequireJs


How-to use it
====================

On your View just init backbone-modal with your extrernal view as argument

```
  var Backbone_modal = require('modal');
  var ExternalView = require('apps/WizardExample/views/externalView');
  
  .
  .
  .
  
  new Backbone_modal(ExternalView);
  
  
```