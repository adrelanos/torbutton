// debug prefs
pref("extensions.torbutton.debug",true);
pref("extensions.torbutton.loglevel",4);
pref("extensions.torbutton.logmethod",1); // 0=stdout, 1=errorconsole, 2=debuglog

// Display prefs
pref("extensions.torbutton.display_panel",true);
pref("extensions.torbutton.panel_style",'text');
pref("extensions.torbutton@torproject.org.description", "chrome://torbutton/locale/torbutton.properties");
pref("extensions.torbutton.updateNeeded", false);

// proxy prefs
pref("extensions.torbutton.settings_method",'recommended');
pref("extensions.torbutton.use_privoxy",true);
pref("extensions.torbutton.http_proxy","");
pref("extensions.torbutton.http_port",0);
pref("extensions.torbutton.https_proxy","");
pref("extensions.torbutton.https_port",0);
pref("extensions.torbutton.ftp_proxy","");
pref("extensions.torbutton.ftp_port",0);
pref("extensions.torbutton.gopher_proxy","");
pref("extensions.torbutton.gopher_port",0);
pref("extensions.torbutton.socks_host","");
pref("extensions.torbutton.socks_port",0);
pref("extensions.torbutton.socks_version",5);
pref("extensions.torbutton.locked_mode",true);
pref("extensions.torbutton.test_url","https://check.torproject.org/?TorButton=true");
pref("extensions.torbutton.test_url_interactive", "https://check.torproject.org/?lang=__LANG__");
pref("extensions.torbutton.local_tor_check",true);
pref("extensions.torbutton.test_failed",false);
pref("extensions.torbutton.no_proxies_on","");
pref("extensions.torbutton.versioncheck_url","https://www.torproject.org/projects/torbrowser/RecommendedTBBVersions");
pref("extensions.torbutton.versioncheck_enabled",true);

// XXX: wtf prefs? These seem not actually connected, but govern
// if user wants own tor proxy settings
pref("extensions.torbutton.custom.http_proxy","");
pref("extensions.torbutton.custom.http_port",0);
pref("extensions.torbutton.custom.https_proxy","");
pref("extensions.torbutton.custom.https_port",0);
pref("extensions.torbutton.custom.ftp_proxy","");
pref("extensions.torbutton.custom.ftp_port",0);
pref("extensions.torbutton.custom.gopher_proxy","");
pref("extensions.torbutton.custom.gopher_port",0);
pref("extensions.torbutton.custom.socks_host","");
pref("extensions.torbutton.custom.socks_port",0);
pref("extensions.torbutton.custom.socks_version",5);

// saved prefs:
pref("extensions.torbutton.saved.type", 0);
pref("extensions.torbutton.saved.http_proxy", "");
pref("extensions.torbutton.saved.http_port",0);
pref("extensions.torbutton.saved.https_proxy","");
pref("extensions.torbutton.saved.https_port",0);
pref("extensions.torbutton.saved.ftp_proxy","");
pref("extensions.torbutton.saved.ftp_port",0);
pref("extensions.torbutton.saved.gopher_proxy","");
pref("extensions.torbutton.saved.gopher_port",0);
pref("extensions.torbutton.saved.socks_host","");
pref("extensions.torbutton.saved.socks_version",0);
pref("extensions.torbutton.saved.socks_port",0);
pref("extensions.torbutton.saved.socks_remote_dns",false);
pref("extensions.torbutton.saved.no_proxies_on","");

pref("extensions.torbutton.saved.tor_protocol",false);

pref("extensions.torbutton.saved.cookieLifetime",0);
pref("extensions.torbutton.saved.full_page_plugins","");
pref("extensions.torbutton.saved.disk_cache",true);
pref("extensions.torbutton.saved.safebrowsing",true);
pref("extensions.torbutton.saved.search_suggest",true);
pref("extensions.torbutton.saved.enable_java", true);
pref("extensions.torbutton.saved.expire_history", 9);
pref("extensions.torbutton.saved.places_enabled", true);
pref("extensions.torbutton.saved.download_retention", 2);
pref("extensions.torbutton.saved.formfill", true);
pref("extensions.torbutton.saved.remember_signons", true);
pref("extensions.torbutton.saved.sendSecureXSiteReferrer", true);
pref("extensions.torbutton.saved.dom_storage", true);
pref("extensions.torbutton.saved.mem_cache", true);
pref("extensions.torbutton.saved.offline_cache", true);
pref("extensions.torbutton.saved.http_cache", true);
pref("extensions.torbutton.saved.extension_update", true);
pref("extensions.torbutton.saved.app_update", true);
pref("extensions.torbutton.saved.auto_update", true);
pref("extensions.torbutton.saved.search_update", true);
pref("extensions.torbutton.saved.geo_enabled", true);
pref("extensions.torbutton.saved.zoom_specific", true);
pref("extensions.torbutton.saved.accept_languages", "");
pref("extensions.torbutton.saved.accept_charsets", "");
pref("extensions.torbutton.saved.appname_override","");
pref("extensions.torbutton.saved.appversion_override","");
pref("extensions.torbutton.saved.platform_override","");
pref("extensions.torbutton.saved.oscpu_override", "");
pref("extensions.torbutton.saved.useragent_override", "");
pref("extensions.torbutton.saved.productsub_override","");
pref("extensions.torbutton.saved.buildID_override","");
pref("extensions.torbutton.saved.useragent_vendor", "");
pref("extensions.torbutton.saved.useragent_vendorSub","");
pref("extensions.torbutton.saved.transparentTor",false);
pref("extensions.torbutton.saved.webgl_disabled", false);
// network.dns.disablePrefetch is a hidden option. It has no default value:
//pref("extensions.torbutton.saved.dns_prefetch", false);

// State prefs:
pref("extensions.torbutton.tor_enabled",false);
pref("extensions.torbutton.proxies_applied",false);
pref("extensions.torbutton.settings_applied",false);
pref("extensions.torbutton.startup",false);
pref("extensions.torbutton.block_cert_dialogs",false);
pref("extensions.torbutton.asked_ca_disable",false);
pref("extensions.torbutton.warned_ff3",false);
pref("extensions.torbutton.inserted_button",false);
pref("extensions.torbutton.prompted_language",false);

// Security prefs:
pref("extensions.torbutton.no_tor_plugins",true);
pref("extensions.torbutton.clear_cookies",false);
pref("extensions.torbutton.cookie_jars",false);
pref("extensions.torbutton.cookie_protections",true);
pref("extensions.torbutton.cookie_auto_protect",false);
pref("extensions.torbutton.dual_cookie_jars",true);
pref("extensions.torbutton.disable_domstorage",false);
pref("extensions.torbutton.clear_cache",true);
pref("extensions.torbutton.block_cache",false);
pref("extensions.torbutton.clear_history",false);
pref("extensions.torbutton.kill_bad_js",true);
pref("extensions.torbutton.block_thread",true);
pref("extensions.torbutton.block_thwrite",true);
pref("extensions.torbutton.block_nthread",false);
pref("extensions.torbutton.block_nthwrite",false);
pref("extensions.torbutton.no_updates",false);
pref("extensions.torbutton.isolate_content",true);
pref("extensions.torbutton.no_search",true);
pref("extensions.torbutton.set_uagent",true);
pref("extensions.torbutton.notor_sessionstore",true);
pref("extensions.torbutton.nonontor_sessionstore",false);
pref("extensions.torbutton.reload_crashed_jar",true); 
pref("extensions.torbutton.spoof_english",true);
pref("extensions.torbutton.spoof_charset",'iso-8859-1,*,utf-8');
pref("extensions.torbutton.spoof_language",'en-us, en');
pref("extensions.torbutton.spoof_locale",'en-US');
pref("extensions.torbutton.refererspoof", 0); //0=smart referer, 1=blank, 2=no spoofing
pref("extensions.torbutton.shutdown_method",1); // 0=none, 1=tor, 2=all
pref("extensions.torbutton.block_tforms",true);
pref("extensions.torbutton.block_ntforms",false);
pref("extensions.torbutton.clear_http_auth",true);
pref("extensions.torbutton.close_tor",false);
pref("extensions.torbutton.close_nontor",false);
pref("extensions.torbutton.close_newnym",true);
pref("extensions.torbutton.block_js_history",true);
pref("extensions.torbutton.resize_on_toggle",true);
pref("extensions.torbutton.resize_new_windows",true);
pref("extensions.torbutton.banned_ports","9050,9051,9150,9151");
pref("extensions.torbutton.block_tor_file_net",true);
pref("extensions.torbutton.block_nontor_file_net",false);
pref("extensions.torbutton.jar_certs",false);
pref("extensions.torbutton.jar_ca_certs",false);
pref("extensions.torbutton.startup_state", 2); // 0=non-tor, 1=tor, 2=last
pref("extensions.torbutton.tor_memory_jar",false);
pref("extensions.torbutton.nontor_memory_jar",false);
pref("extensions.torbutton.tz_string","");
pref("extensions.torbutton.launch_warning",true);
pref("extensions.torbutton.refererspoof", 0); //0=no spoof, 1=root spoof, 2=domain spoof, 3=blank spoof, 4=custom spoof
pref("extensions.torbutton.fakerefresh", false);
pref("extensions.torbutton.customeref","");
pref("extensions.torbutton.disable_livemarks",true);
pref("extensions.torbutton.update_torbutton_via_tor",true);
pref("extensions.torbutton.tor_urls",false);
// Opt out of Firefox addon pings:
// https://developer.mozilla.org/en/Addons/Working_with_AMO
pref("extensions.torbutton@torproject.org.getAddons.cache.enabled", false);
pref("extensions.torbutton.block_disk", true);
pref("extensions.torbutton.resist_fingerprinting", true);
pref("extensions.torbutton.restrict_thirdparty", true);
// Security Slider
pref("extensions.torbutton.security_slider", 1);
pref("extensions.torbutton.security_custom", false);

// Google Captcha prefs
// FIXME: NID cookie?
pref("extensions.torbutton.gss_cookie", "Q0=dGVzdA");
pref("extensions.torbutton.gnid_cookie", "28=aJDrQUM1UIWu1dl1tLMdzsi4trVtb8wayv4C2BCLPfjgQ2PlN7Pubc8UB9pYdMqGnzzCu95eXXB8MPhXVCC3o9SmJm_tQv8A4V2UZ4zoKKmrJqxcB1q00c2WxRJZD0uH");
pref("extensions.torbutton.gsnid_cookie", "28=IY3ya2lsYwatvtjgr_zCzNaL0fU4LRusf1tJ-bRd-g=_qqMP84CMW2_bUOT");
pref("extensions.torbutton.gpref_cookie", "ID=b7d8832732f59bb2:U=d7bc4e42b53ea8b5:TM=1256941064:LM=1256941222:S=AUWTvLPhx8FcIgYc");
pref("extensions.torbutton.ggdsess_cookie", "ID=b7d8832732f59bb2:EX=1256952014:S=4CLFlq6bPRmEtd8c");
pref("extensions.torbutton.gs_cookie", "sorry=zDHg1z1zi0BRXVKRrIaH2Q");
pref("extensions.torbutton.google_host", ".google.ca");
// Reset the google cookie to pref on cookie-changed:clear events
pref("extensions.torbutton.reset_google_cookies", false);
// Regen the google cookie on cookie-changed:clear events via a fetch
pref("extensions.torbutton.regen_google_cookies", false);
// Xfer google search cookies across all google domains
pref("extensions.torbutton.xfer_google_cookies", true);

// Google redirect prefs
pref("extensions.torbutton.google_redir_url", 4);
pref("extensions.torbutton.dodge_google_captcha", true);
pref("extensions.torbutton.asked_google_captcha", false);
pref("extensions.torbutton.redir_url.1", "https://www.ixquick.com/do/metasearch.pl?query=");
pref("extensions.torbutton.redir_url.2", "http://www.bing.com/search?q=");
pref("extensions.torbutton.redir_url.3", "http://search.yahoo.com/search?p=");
pref("extensions.torbutton.redir_url.4", "https://www.startpage.com/rto/search?query=");
pref("extensions.torbutton.redir_url.5", "https://duckduckgo.com/?q=");
pref("extensions.torbutton.fix_google_srch", true);

// User agent prefs:
pref("extensions.torbutton.appname_override","Netscape");
pref("extensions.torbutton.appversion_override","5.0 (Windows)");
pref("extensions.torbutton.platform_override","Win32");
pref("extensions.torbutton.oscpu_override", "Windows NT 6.1");

pref("extensions.torbutton.useragent_override",
     "Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0");

pref("extensions.torbutton.productsub_override","20100101");
pref("extensions.torbutton.buildID_override","0");
pref("extensions.torbutton.useragent_vendor", "");
pref("extensions.torbutton.useragent_vendorSub","");

pref("extensions.torbutton.safecache",1); // 0=always, 1=during tor, 2=never
pref("extensions.torbutton.dual_key_cookies",false);
pref("extensions.torbutton.cookie_js_allow", true);
pref("extensions.torbutton.prompt_torbrowser", true);
pref("extensions.torbutton.confirm_plugins", true);

// Browser home page, spell checker dictionary, and search engine overrides:
pref("browser.startup.homepage", "chrome://torbutton/locale/browser.properties");
pref("spellchecker.dictionary", "chrome://torbutton/locale/browser.properties");
pref("browser.search.defaultenginename", "chrome://torbutton/locale/browser.properties");
pref("browser.search.order.1", "chrome://torbutton/locale/browser.properties");
pref("browser.search.order.2", "chrome://torbutton/locale/browser.properties");
pref("browser.search.order.3", "chrome://torbutton/locale/browser.properties");
