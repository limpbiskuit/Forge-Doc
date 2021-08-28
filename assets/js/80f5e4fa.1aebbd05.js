"use strict";(self.webpackChunkdoc_forge=self.webpackChunkdoc_forge||[]).push([[618],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},474:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:2,title:"Dist Executor"},l=void 0,u={unversionedId:"advanced/dist-executor",id:"advanced/dist-executor",isDocsHomePage:!1,title:"Dist Executor",description:"Introduction",source:"@site/docs/advanced/dist-executor.md",sourceDirName:"advanced",slug:"/advanced/dist-executor",permalink:"/docs/advanced/dist-executor",editUrl:"https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master/docs/advanced/dist-executor.md",tags:[],version:"current",lastUpdatedBy:"Mysterious_Dev",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Dist Executor"},sidebar:"tutorialSidebar",previous:{title:"Access Transformer",permalink:"/docs/advanced/access-transformer"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"C&#39;est quoi une <code>Dist</code> ?",id:"cest-quoi-une-dist-",children:[]},{value:"L&#39;annotation <code>@OnlyIn</code>",id:"lannotation-onlyin",children:[]},{value:"La classe <code>DistExecutor</code>",id:"la-classe-distexecutor",children:[{value:"La m\xe9thode <code>(un)safeRunForDist</code>",id:"la-m\xe9thode-unsaferunfordist",children:[]},{value:"La m\xe9thode <code>(un)safeRunWhenOn</code>",id:"la-m\xe9thode-unsaferunwhenon",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Le syst\xe8me de ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist Executor")," est une API efficace fournie par ",(0,i.kt)("strong",{parentName:"p"},"FML")," situ\xe9e dans le projet ",(0,i.kt)("inlineCode",{parentName:"p"},"fmlcore")," permettant de g\xe9rer le code ne devant s'ex\xe9cuter que sur une ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist")," particuli\xe8re. Ce syst\xe8me a \xe9t\xe9 ajout\xe9 en remplacement du syst\xe8me de ",(0,i.kt)("inlineCode",{parentName:"p"},"SidedProxy"),", pr\xe9sent lors des anciennes versions de ",(0,i.kt)("strong",{parentName:"p"},"Forge")," (1.12.2 et avant)."),(0,i.kt)("h2",{id:"cest-quoi-une-dist-"},"C'est quoi une ",(0,i.kt)("inlineCode",{parentName:"h2"},"Dist")," ?"),(0,i.kt)("p",null,"Une ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist")," repr\xe9sente sur quel \"c\xf4t\xe9\", sur quel distribution de Minecraft doit s'ex\xe9cuter ce code. Ces distributions sont repr\xe9sent\xe9es dans l'\xe9num\xe9ration ",(0,i.kt)("inlineCode",{parentName:"p"},"net.minecraftforge.api.distmarker.Dist"),". Aujourd'hui, il existe 2 distributions :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLIENT")," : La distribution du client. Il s'agit du client avec lequel les joueurs jouent. Il g\xe8re la partie rendu/graphique du jeu."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DEDICATED_SERVER")," : La distribution du serveur d\xe9di\xe9. Il s'agit de la distribution r\xe9serv\xe9e aux serveurs. Il g\xe8re le monde ainsi que quelques \xe9l\xe9ments logiques, et communique avec le client via le r\xe9seau. Il ne contient aucun \xe9l\xe9ment visuel du jeu.")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"La distribution ",(0,i.kt)("inlineCode",{parentName:"p"},"DEDICATED_SERVER")," n'est pas utilis\xe9e lors de l'ex\xe9cution du serveur int\xe9gr\xe9 lanc\xe9 en solo."))),(0,i.kt)("h2",{id:"lannotation-onlyin"},"L'annotation ",(0,i.kt)("inlineCode",{parentName:"h2"},"@OnlyIn")),(0,i.kt)("p",null,"L'annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@OnlyIn")," permet d'indiquer \xe0 ",(0,i.kt)("strong",{parentName:"p"},"FML")," de charger ou non le membre annot\xe9 en fonction de la ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist")," sp\xe9cifi\xe9e en param\xe8tre. Tout comme l'\xe9num\xe9ration ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist"),", elle se situe dans le package ",(0,i.kt)("inlineCode",{parentName:"p"},"net.minecraftforge.api.distmarker"),". Elle peut-\xeatre utilis\xe9e sur les classes, les champs, les m\xe9thodes, les constructeurs, les packages et les annotations. Pour information, cette annotation est trait\xe9e dans la classe ",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeDistCleaner")," du projet ",(0,i.kt)("inlineCode",{parentName:"p"},"fmlloader"),". L'annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@OnlyIns")," ne sera pas trait\xe9 dans ce tutoriel."),(0,i.kt)("p",null,"Si on tente d'appeler un membre depuis une autre ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist"),", le membre sera consid\xe9r\xe9 comme inexistant et des erreurs comme ",(0,i.kt)("inlineCode",{parentName:"p"},"NoSuchFieldError"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NoSuchMethodError")," ou encore ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassNotFoundException")," peuvent survenir en fonction du type du membre."),(0,i.kt)("p",null,"Par exemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package fr.lmf.distexecutor;\n\nimport net.minecraftforge.api.distmarker.Dist;\nimport net.minecraftforge.api.distmarker.OnlyIn;\n\n@OnlyIn(Dist.CLIENT)\npublic class OnlyClientClass {\n\n    private Object aField;\n\n    public void aMethod() {\n        // do something\n    }\n}\n")),(0,i.kt)("p",null,"La classe ne sera charg\xe9e que sur le client. Si elle est appel\xe9e sur le serveur, une erreur sera propag\xe9e."),(0,i.kt)("p",null,"En revanche, une m\xeame classe par exemple peut contenir des membres reli\xe9s \xe0 des ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist"),"s diff\xe9rentes.\nExemple :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package fr.lmf.distexecutor;\n\nimport net.minecraftforge.api.distmarker.Dist;\nimport net.minecraftforge.api.distmarker.OnlyIn;\n\npublic class SimpleClass {\n\n    @OnlyIn(Dist.CLIENT)\n    private Object aField;\n\n    @OnlyIn(Dist.DEDICATED_SERVER)\n    public void aMethod() {\n        // do something\n    }\n}\n")),(0,i.kt)("p",null,"Ici, la classe sera charg\xe9e, quelque soit la distribution, mais le field ",(0,i.kt)("inlineCode",{parentName:"p"},"aField")," sera inexistant sur serveur et de m\xeame pour la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"aMethod")," sur le client. Si nous ex\xe9cutons ",(0,i.kt)("inlineCode",{parentName:"p"},"System.out.println(this.aField);")," dans la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"aMethod"),", le jeu plantera."),(0,i.kt)("h2",{id:"la-classe-distexecutor"},"La classe ",(0,i.kt)("inlineCode",{parentName:"h2"},"DistExecutor")),(0,i.kt)("p",null,"Maintenant, vous aimeriez peut-\xeatre savoir comment appeler une classe, une m\xe9thode ou quoi que ce soit en fonction de la ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist")," pour \xe9viter les erreurs \xe9voqu\xe9es plus haut ?\nUtiliser la reflection pour voir si la classe ",(0,i.kt)("inlineCode",{parentName:"p"},"net.minecraft.client.Minecraft")," (uniquement pr\xe9sente sur le client) existe serait une solution ; h\xe9las les limitations de ",(0,i.kt)("strong",{parentName:"p"},"FML")," nous en emp\xeache : une erreur est propag\xe9e et ferme le jeu automatiquement avant m\xeame que nouis puissons ex\xe9cuter du code. De toute fa\xe7on, ce n'est pas la m\xe9thode propre et recommand\xe9e que nous recommande ",(0,i.kt)("strong",{parentName:"p"},"Forge"),"."),(0,i.kt)("p",null,"La classe ",(0,i.kt)("inlineCode",{parentName:"p"},"DistExecutor")," entre maintenant en jeu. Elle se situe dans le package ",(0,i.kt)("inlineCode",{parentName:"p"},"net.minecraftforge.fml")," du projet ",(0,i.kt)("inlineCode",{parentName:"p"},"fmlcore"),". Elle poss\xe8de quelques m\xe9thodes statiques utilitaires qui peuvent r\xe9pondr \xe0 notre probl\xe9matique.\nNous nous int\xe9resserons pour le moment qu'aux m\xe9thodes ",(0,i.kt)("inlineCode",{parentName:"p"},"(un)safeRunForDist")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"(un)safeRunWhenOn"),". Libre \xe0 vous de lire la JavaDoc disponible dans la classe pour conna\xeetre l'utilit\xe9 de chaque m\xe9thode. Veillez \xe0 ne pas utiliser - du moins le moins possible - les m\xe9thodes annot\xe9es avec l'annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@Deprecated"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Les m\xe9thodes ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe")," n'ex\xe9cutent pas certaines v\xe9rifications que les m\xe9thodes ",(0,i.kt)("inlineCode",{parentName:"p"},"safe")," appliquent \xe0 l'ex\xe9cution du jeu. Nonobstant, ces v\xe9rifications ne sont pas appliqu\xe9es en production, quand vous lancer le jeu depuis un launcher par exemple. Vous pouvez donc avoir un plantage en lan\xe7ant le jeu depuis un environnement de d\xe9veloppement, et pas en lan\xe7ant votre jeu de mani\xe8re classique. Enfin, les m\xe9thodes ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe")," ne peuvent pr\xe9venir de certaines erreurs comme les ",(0,i.kt)("inlineCode",{parentName:"p"},"ClassCastException"),"."))),(0,i.kt)("h3",{id:"la-m\xe9thode-unsaferunfordist"},"La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"h3"},"(un)safeRunForDist")),(0,i.kt)("p",null,"La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"(un)safeRunForDist")," permet de retourner une instance de la classe demand\xe9e en param\xe8tre en fonction de la ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist"),'. Par exemple, un syst\xe8me de "proxy" est facilement reproductible gr\xe2ce \xe0 cette m\xe9thode :'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package fr.lmf.distexecutor;\n\npublic interface SidedManager {\n    void init();\n}\n")),(0,i.kt)("p",null,"Cette interface va nous permettre de d\xe9finir un membre commun entre nos ",(0,i.kt)("inlineCode",{parentName:"p"},"Manager"),"s : un pour le client, et l'autre pour le serveur. Voici un exemple d'impl\xe9mentation pour le client :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package fr.lmf.distexecutor.client;\n\nimport fr.lmf.distexecutor.SidedManager;\nimport net.minecraftforge.api.distmarker.Dist;\nimport net.minecraftforge.api.distmarker.OnlyIn;\nimport net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent;\nimport net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;\n\n@OnlyIn(Dist.CLIENT)\npublic class ClientManager implements SidedManager {\n    \n    @Override\n    public void init() {\n        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::clientSetup);\n    }\n\n    public void clientSetup(FMLClientSetupEvent event) {\n        // do something at client startup\n    }\n}\n")),(0,i.kt)("p",null,"En voici une autre pour le serveur :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package fr.lmf.distexecutor.server;\n\nimport fr.lmf.distexecutor.SidedManager;\nimport net.minecraftforge.api.distmarker.Dist;\nimport net.minecraftforge.api.distmarker.OnlyIn;\nimport net.minecraftforge.common.MinecraftForge;\nimport net.minecraftforge.eventbus.api.SubscribeEvent;\nimport net.minecraftforge.fmlserverevents.FMLServerStartedEvent;\n\n@OnlyIn(Dist.DEDICATED_SERVER)\npublic class ServerManager implements SidedManager\n{\n    @Override\n    public void init() {\n        MinecraftForge.EVENT_BUS.register(this);\n    }\n\n    @SubscribeEvent\n    public void onServerStart(FMLServerStartedEvent event) {\n        // do something at server startup\n    }\n}\n")),(0,i.kt)("p",null,"Enfin, il faudra ex\xe9cuter la bonne m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," au d\xe9marrage du mod. La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"(un)safeRunForDist")," prend 2 param\xe8tres \xe0 signature identiques : un ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/function/Supplier.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Supplier"))," d'un ",(0,i.kt)("inlineCode",{parentName:"p"},"(Safe)Supplier")," de votre classe cible (ici ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientManager")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerManager"),"). Un ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeSupplier")," est une interface fournie par ",(0,i.kt)("strong",{parentName:"p"},"FML")," \xe9tandant ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeReferent"),". Un ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeReferent")," est une interface elle aussi fournie par ",(0,i.kt)("strong",{parentName:"p"},"FML"),' qui va subir des v\xe9rifications et propager une erreur si il n\'est pas jug\xe9 "safe". Les m\xe9thodes ',(0,i.kt)("inlineCode",{parentName:"p"},"unsafe")," ne demandent pas de ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeSupplier"),", remplac\xe9 par un ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier")," classique."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package fr.lmf.distexecutor;\n\nimport fr.lmf.distexecutor.client.ClientManager;\nimport fr.lmf.distexecutor.server.ServerManager;\nimport net.minecraftforge.fml.DistExecutor;\nimport net.minecraftforge.fml.common.Mod;\n\n@Mod("distexecutorexample")\npublic class DistExecutorMod {\n\n    // some fields and constants\n\n    public DistExecutorMod() {\n        // do something\n        var manager = DistExecutor.unsafeRunForDist(() -> ClientManager::new, () -> ServerManager::new);\n        manager.init();\n        // do something\n    }\n\n    // other methods\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notez l'utilisation du mot-cl\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),", introduit dans ",(0,i.kt)("strong",{parentName:"p"},"Java")," depuis la version 10. Il d\xe9tectera automatiquement le type commun de nos deux classes, ici ",(0,i.kt)("inlineCode",{parentName:"p"},"SidedManager"),". Nous avons donc acc\xe8s aux m\xe9thodes dans cette classe, soit ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," dans le cadre de l'exemple, libre \xe0 vous d'en rajouter autant que vous voulez pour les usages de votre choix."))),(0,i.kt)("h3",{id:"la-m\xe9thode-unsaferunwhenon"},"La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"h3"},"(un)safeRunWhenOn")),(0,i.kt)("p",null,"Voici une seconde m\xe9thode qui fonctionne un peu diff\xe9remment, rassurez vous, vous n'avez pas besoin de tout recommencer, gardez vos classes ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientManager")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerManager"),", vous allez en avoir besoin."),(0,i.kt)("p",null,"La m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"(un)safeRunWhenOn")," fonctionne diff\xe9remment, d\xe9j\xe0, elle ne prend pas un ensemble de ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier"),", mais une ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist")," en premier param\xe8tre et un ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier")," d'un objet ",(0,i.kt)("inlineCode",{parentName:"p"},"(Safe)Runnable")," (en fonction de si vous utilisez la m\xe9thode safe ou unsafe). Si la ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist")," fournie en param\xe8tre correspond \xe0 la distribution actuelle, le code contenu dans l'objet ",(0,i.kt)("inlineCode",{parentName:"p"},"(Safe)Runnable"),' sera ex\xe9cut\xe9. Par exemple, voici un code qui affichera dans la console "Bonjour depuis le client" sur le client et "Bonjour depuis le serveur" sur le serveur :'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'DistExecutor.unsafeRunWhenOn(Dist.CLIENT, () -> () -> System.out.println("Bonjour depuis le client"));\nDistExecutor.unsafeRunWhenOn(Dist.DEDICATED_SERVER, () -> () -> System.out.println("Bonjour depuis le serveur"));\n')),(0,i.kt)("p",null,"Jusqu'ici, nos deux ",(0,i.kt)("inlineCode",{parentName:"p"},"Manager"),"s avait la m\xeame m\xe9thode en commun, appel\xe9e au m\xeame moment. En revanche, vous aimeriez pouvoir \xeatre plus libre dans l'utilisation de vos ",(0,i.kt)("inlineCode",{parentName:"p"},"Manager"),"s en ajoutant des m\xe9thodes ind\xe9pendantes et pouvant \xeatre appel\xe9es un peu partout comme pouvoir d\xe9marrer une base de donn\xe9e depuis le serveur, ou alors ouvrir un \xe9cran depuis le client..."),(0,i.kt)("p",null," On consid\xe8re une m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"foo(String)")," dans ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientManager")," et une m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"bar(int)")," dans ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerManager"),". Effectivement, polymorphisme et h\xe9ritage ici ne seront pas utiles. Une solution est de d\xe9clarer 2 fields publiques et statiques (ou alors priv\xe9, avec un accesseur), un pour le ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientManager")," et l'autre pour le ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerManager"),", de les initialiser chacun \xe0 l'aide de la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"(un)safeRunWhenOn"),". Puis ensuite de les appeler quand bon vous semble dans une classe elle-m\xeame annot\xe9e ",(0,i.kt)("inlineCode",{parentName:"p"},"@OnlyIn")," avec la ",(0,i.kt)("inlineCode",{parentName:"p"},"Dist")," correspondante, ou bien en utilisant \xe0 nouveau la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"(un)safeRunWhenOn"),"."),(0,i.kt)("p",null,"Vous pouvez \xe9galement profiter de l'interface ",(0,i.kt)("inlineCode",{parentName:"p"},"SidedManager")," cr\xe9\xe9e plus t\xf4t pour donner un acc\xe8s s\xfbr aux m\xe9thodes communes et publiques des deux ",(0,i.kt)("inlineCode",{parentName:"p"},"Manager"),"s :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package fr.lmf.distexecutor;\n\nimport fr.lmf.distexecutor.SidedManager;\nimport fr.lmf.distexecutor.client.ClientManager;\nimport fr.lmf.distexecutor.server.ServerManager;\nimport net.minecraftforge.api.distmarker.Dist;\nimport net.minecraftforge.api.distmarker.OnlyIn;\nimport net.minecraftforge.fml.DistExecutor;\nimport net.minecraftforge.fml.common.Mod;\n\n@Mod("distexecutorexample")\npublic class DistExecutorMod {\n\n    @OnlyIn(Dist.CLIENT)\n    private static ClientManager clientManager;\n\n    @OnlyIn(Dist.DEDICATED_SERVER)\n    private static ServerManager serverManager;\n\n    private static SidedManager currentManager;\n\n    public DistExecutorMod() {\n        DistExecutor.unsafeRunWhenOn(Dist.CLIENT, () -> () -> {\n            clientManager = new ClientManager();\n            clientManager.foo("foobar");\n        });\n        DistExecutor.unsafeRunWhenOn(Dist.DEDICATED_SERVER, () -> () -> {\n            serverManager = new ServerManager();\n            serverManager.bar(0);\n        });\n        currentManager = DistExecutor.unsafeRunForDist(() -> DistExecutorMod::getClientManager, () -> DistExecutorMod::getServerManager);\n        currentManager.init();\n    }\n\n    @OnlyIn(Dist.CLIENT)\n    public static ClientManager getClientManager() {\n        return clientManager;\n    }\n\n    @OnlyIn(Dist.DEDICATED_SERVER)\n    public static ServerManager getServerManager() {\n        return serverManager;\n    }\n\n    public static SidedManager getCurrentManager() {\n        return currentManager;\n    }\n}\n')),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Vous savez maintenant vous servir de l'annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@OnlyIn")," et de la classe ",(0,i.kt)("inlineCode",{parentName:"p"},"DistExecutor"),". Vous \xeates au courant des erreurs qui peuvent survenir si vous utilisez de mani\xe8re incorrecte ces classes et que vous appelez de mani\xe8re non v\xe9rifi\xe9e des membres pr\xe9sent sur une seule distribution du client."),(0,i.kt)("p",null,"Ce n'est pas une notion \xe9vidente, c'est pour \xe7a que j'ai essay\xe9 d'\xeatre le plus clair et concis et de donner quelques exemples et quelques tips. Toutefois il existe \xe9videmment d'autres mani\xe8res d'utiliser ces outils pratique. Ne vous d\xe9couragez pas au moindre plantage et faites attention \xe0 ce que vous appelez."))}c.isMDXComponent=!0}}]);