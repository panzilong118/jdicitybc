export default function(req,res,client) {
    const host = req.get("host");
    const refer = req.get("referer")
    var url = "/passport/cookie/checkStAndCreateCookie";
    if(/platform/.test(host)||/passport-platform/.test(refer) || /view-zone/.test(host)
) {
        url = "/platform-passport/cookie/checkStAndCreateCookie"
    }
	  const returnUrl = req.query.return_url;
  	const serviceTicket = req.query.st;
  	const autosign = req.query.autosign||"1";
  	const platformId = 2;
    console.log("requerst params:","returnUrl:",returnUrl,",serviceTicket:",serviceTicket)
  	client.post(url,{data:{returnUrl,platformId,serviceTicket,autosign}}).then(
     	(result)=>{
          console.log("responese result:",result);
        	if(result.code=="0") {
           		// res.header("Set-Cookie", result.data + ";Path=/");
             var cookieDomain = host.replace(/buyer\.|shop\.|\bmall\./,"");
             console.log(cookieDomain,"------------------------")
             res.header("Set-Cookie", result.data + ";Path=/;httpOnly=true;Domain="+cookieDomain);
             res.redirect(returnUrl);
        	}else{
           		res.send(result.msg)
        	}
     	},
     	(error)=>{
        	res.send(error)
     	}
    )
}