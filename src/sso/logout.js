export default function(req,res) {
	 var host = req.get("host").replace(/buyer\.|shop\.|mall\./,"");
   if(/passport/.test(host)) {
      res.clearCookie('_ecc_b2b_', {path: '/',domain:host,"maxAge":0,httpOnly: true});
      res.clearCookie('_ecc_b2b_platform', {path: '/',domain:host,"maxAge":0,httpOnly: true});
      res.clearCookie('areaId', {path: '/',domain:host,"maxAge":0,httpOnly: true});
      res.clearCookie('companyId', {path: '/',domain:host,"maxAge":0,httpOnly: true});
      res.clearCookie('areaName', {path: '/',domain:host,"maxAge":0,httpOnly: true});

   }else{
      res.clearCookie('_ecc_b2b_', {path: '/',domain:host,httpOnly: true});
      res.clearCookie('_ecc_b2b_', {path: '/',domain:"www."+host,httpOnly: true});
      res.clearCookie('_ecc_b2b_platform', {path: '/',domain:host,httpOnly: true});
   }
   res.send("clear cookie, ok");
}
