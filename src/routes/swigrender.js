import serialize from 'serialize-javascript';
export default function(req,res, template,data={},config,envData={}) {
  const micro_service_name = config.micro_service_name.replace("b2b-","")
  Object.assign(envData,{_b2b_static_server_:config._b2b_static_server_+"/"+micro_service_name+"/"});
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }
  try {
    const assets = webpackIsomorphicTools.assets();
    const style = Object.keys(assets.styles).map((style, key) => {
       return '<link href="' + assets.styles[style] + '" media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8"/>'
    });
    const serverData = "window.__data="+serialize(envData);
    res.render(template, {css:assets.styles,style:style.join(" "),serverData,js:assets.javascript,mode:__DEVELOPMENT__,micro_service_name,...data});

  }catch(err) {
    console.log(err.stack)
  }
}