$(document).ready(function(){
  $('.jstree').on('changed.jstree', function (e, data) {
    console.log(data);
  }).jstree({ 
    "plugins" : [ "types", "checkbox" ],
    'core' : {
      'data' : [
          {
            'text' : '[Top Level Folder Name]',
            'state' : {
              'opened' : true,
              'selected' : true
            },
            'children' : [
              { 'text' : '[Subfolder Name]' },
              { 'text' : '[Subfolder Name]' }
            ]
          },
          {
            'text' : '[Top Level Folder Name]',
            'state' : {
              'opened' : false,
              'selected' : false
            },
            'children' : [
              { 'text' : '[Subfolder Name]' },
              { 'text' : '[Subfolder Name]' }
            ]
          },
          {
            'text' : '[Top Level Folder Name]',
            'state' : {
              'opened' : false,
              'selected' : false
            },
            'children' : [
              { 'text' : '[Subfolder Name]' },
              { 'text' : '[Subfolder Name]' }
            ]
          },
          {
            'text' : '[Top Level Folder Name]',
            'state' : {
              'opened' : false,
              'selected' : false
            },
            'children' : [
              { 'text' : '[Subfolder Name]' },
              { 'text' : '[Subfolder Name]' }
            ]
          },
          {
            'text' : '[Top Level Folder Name]',
            'state' : {
              'opened' : false,
              'selected' : false
            },
            'children' : [
              { 'text' : '[Subfolder Name]' },
              { 'text' : '[Subfolder Name]' }
            ]
          }
      ],
      "themes" : {
        "default" : "large",
        "dots" : false
      }
    }
  });

  var interval = setInterval(function(){
    if($('.jstree-icon.jstree-themeicon').length > 0){
      $('.jstree-icon.jstree-themeicon').before("<div class='edit-settings-icon' data-toggle='modal' data-target='#exampleModal'></div>");
      clearInterval(interval);
    }
  }, 100)
  
  var data = [
          {
            'text' : '[Top Level Folder Name]',
            'state' : {
              'opened' : true,
              'selected' : true
            },
            'children' : [
              { 'text' : '[Subfolder Name]' },
              { 'text' : '[Subfolder Name]' }
            ]
          }]
  
  var position = 'inside';
  var parent = $('.jstree').jstree('get_selected');
  var newNode = { state: "open", data: {data} };

  $('.jstree').jstree("open_node.jstree", parent, position, newNode, false, false);
  
});