<?php 
/* 
 *
 * @TODO: Create testing URL var similar to ASNETTEST
 *
 **/ ?>

<?php 
/* 
 *
 * @TODO: create a PHP object class to access simple variables across all 
 *        views. Below is how cfm-bs4-less is set up.
 *
 * normalizing the variable for template use 
 * <cfset site.dev.test              = asnettest />
 *
 *
 * switch bit to used advanced SEO options on page template 
 * <cfset site.seo.advanced          = 0 />
 *
 * switch bit to use advanced SEO JSON schema in the javascript
 * <cfset site.seo.useSchema         = 0 />
 *
 * <cfset site.seo.companyName       = '' />
 * <cfset site.seo.facebookURL       = '' />
 * <cfset site.seo.linkedInURL       = '' />
 * <cfset site.seo.googlePlusURL     = '' />
 *
 * <cfset site.seo.url               = '' /> 
 *
 * <cfset site.analytics.googleUA    = '' />   UA-XXXXX-X 
 *
 **/ ?>

<?php

    class site {
        public $dev->test = true;        
    }

?>