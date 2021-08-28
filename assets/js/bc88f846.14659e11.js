"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[392],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"Installation"},s="Installation de la workspace",u={unversionedId:"bases/installation",id:"bases/installation",isDocsHomePage:!1,title:"Installation",description:"- Installez Java 16 Development Kit (JDK) en suivant l'un de ces 3 liens : Oracle OU Zulu OU Adoptium. Minecraft et MinecraftForge depuis la 1.17 sont compil\xe9s sous Java 16.",source:"@site/docs/bases/installation.md",sourceDirName:"bases",slug:"/bases/installation",permalink:"/docs/bases/installation",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/bases/installation.md",tags:[],version:"current",lastUpdatedBy:"Flow Arg",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Base du mod",permalink:"/docs/bases/base_du_mod"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation-de-la-workspace"},"Installation de la workspace"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installez Java 16 Development Kit (JDK) en suivant l'un de ces 3 liens : ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.oracle.com/java/technologies/javase-jdk16-downloads.html"},"Oracle"))," OU ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.azul.com/downloads/?version=java-16-sts&package=jdk-fx"},"Zulu"))," OU ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://adoptium.net/?variant=openjdk16&jvmVariant=hotspot"},"Adoptium")),". Minecraft et MinecraftForge depuis la 1.17 sont compil\xe9s sous Java 16."),(0,o.kt)("li",{parentName:"ul"},"Installez le Mod Development Kit (MDK) en suivant ce ",(0,o.kt)("a",{parentName:"li",href:"https://files.minecraftforge.net/"},"lien"),"."),(0,o.kt)("li",{parentName:"ul"},"Extrayez tous les fichiers et dossiers contenus dans le dossier compress\xe9 dans un nouveau dossier (ceci sera votre dossier de mod)."),(0,o.kt)("li",{parentName:"ul"},"Selon votre IDE:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Pour Intellij IDEA, ouvrez un nouveau projet (bouton ",(0,o.kt)("inlineCode",{parentName:"li"},"Open")," dans la version ",(0,o.kt)("strong",{parentName:"li"},"2021.2"),") et s\xe9lectionnez ensuite le fichier ",(0,o.kt)("inlineCode",{parentName:"li"},"build.gradle")," dans le dossier de votre mod, cliquez pour finir sur ",(0,o.kt)("strong",{parentName:"li"},"OK"),"."),(0,o.kt)("li",{parentName:"ul"},"Pour Eclipse, Dans File>Import, choisissez dans Gradle, Existing Gradle projet. Dans le champ ",(0,o.kt)("inlineCode",{parentName:"li"},"Project root directory"),", choisissez le dossier de votre mod et cliquez ensuite sur ",(0,o.kt)("strong",{parentName:"li"},"Finish"),"."))),(0,o.kt)("li",{parentName:"ul"},"Une fois le projet import\xe9, g\xe9n\xe9rez vos configurations de lancement :",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Pour Intellij IDEA, ex\xe9cutez la commande gradle ",(0,o.kt)("inlineCode",{parentName:"li"},"genIntellijRuns")," (",(0,o.kt)("inlineCode",{parentName:"li"},"gradlew genIntellijRuns"),")."),(0,o.kt)("li",{parentName:"ul"},"Pour Eclipse, ex\xe9cutez la commande gradle ",(0,o.kt)("inlineCode",{parentName:"li"},"genEclipseRuns")," (",(0,o.kt)("inlineCode",{parentName:"li"},"gradlew genEclipseRuns"),")."))),(0,o.kt)("li",{parentName:"ul"},"Voil\xe0, si tout s'est bien pass\xe9, vous devriez \xeatre en mesure de lancer votre mod en test.")))}d.isMDXComponent=!0}}]);