"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[3234],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:1},i="Amazon EMR on Amazon EKS",s={unversionedId:"amazon-emr-on-eks/index",id:"amazon-emr-on-eks/index",title:"Amazon EMR on Amazon EKS",description:"Amazon EMR on Amazon EKS enables you to submit Apache Spark jobs on demand on Amazon Elastic Kubernetes Service (EKS) without provisioning clusters. With EMR on EKS, you can consolidate analytical workloads with your other Kubernetes-based applications on the same Amazon EKS cluster to improve resource utilization and simplify infrastructure management.",source:"@site/docs/amazon-emr-on-eks/index.md",sourceDirName:"amazon-emr-on-eks",slug:"/amazon-emr-on-eks/",permalink:"/data-on-eks/docs/amazon-emr-on-eks/",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/amazon-emr-on-eks/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Amazon EMR on EKS",permalink:"/data-on-eks/docs/category/amazon-emr-on-eks"},next:{title:"Monitoring EMR on EKS",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-amp-amg"}},l={},m=[{value:"Benefits of EMR on EKS",id:"benefits-of-emr-on-eks",level:2},{value:"Simplify management",id:"simplify-management",level:3},{value:"Reduce Costs",id:"reduce-costs",level:3},{value:"Optimize Performance",id:"optimize-performance",level:3},{value:"EMR on EKS Deployment patterns with Terraform",id:"emr-on-eks-deployment-patterns-with-terraform",level:2}],c={toc:m};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-emr-on-amazon-eks"},"Amazon EMR on Amazon EKS"),(0,r.kt)("p",null,"Amazon EMR on Amazon EKS enables you to submit Apache Spark jobs on demand on Amazon Elastic Kubernetes Service (EKS) without provisioning clusters. With EMR on EKS, you can consolidate analytical workloads with your other Kubernetes-based applications on the same Amazon EKS cluster to improve resource utilization and simplify infrastructure management."),(0,r.kt)("h2",{id:"benefits-of-emr-on-eks"},"Benefits of EMR on EKS"),(0,r.kt)("h3",{id:"simplify-management"},"Simplify management"),(0,r.kt)("p",null,"You get the same EMR benefits for Apache Spark on EKS that you get on EC2 today. This includes fully managed versions of Apache Spark 2.4 and 3.0, automatic provisioning, scaling, performance optimized runtime, and tools like EMR Studiofor authoring jobs and an Apache Spark UI for debugging."),(0,r.kt)("h3",{id:"reduce-costs"},"Reduce Costs"),(0,r.kt)("p",null,"With EMR on EKS, your compute resources can be shared between your Apache Spark applications and your other Kubernetes applications. Resources are allocated and removed on demand to eliminate over-provisioning or under-utilization of these resources, enabling you to lower costs as you only pay for the resources you use."),(0,r.kt)("h3",{id:"optimize-performance"},"Optimize Performance"),(0,r.kt)("p",null,"By running analytics applications on EKS, you can reuse existing EC2 instances in your shared Kubernetes cluster and avoid the startup time of creating a new cluster of EC2 instances dedicated for analytics. You can also get 3x faster performance running performance optimized Spark with EMR on EKS compared to standard Apache Spark on EKS."),(0,r.kt)("h2",{id:"emr-on-eks-deployment-patterns-with-terraform"},"EMR on EKS Deployment patterns with Terraform"),(0,r.kt)("p",null,"The following Terraform templates are available to deploy."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monitoring EMR on EKS Spark jobs with Prometheus Server, Amazon Managed Prometheus and Amazon Managed Grafana"),(0,r.kt)("li",{parentName:"ul"},"Running EMR on EKS Spark Jobs with FSx for Lustre as Shuffle Storage"),(0,r.kt)("li",{parentName:"ul"},"Scaling EMR on EKS Spark Jobs with Karpenter Autoscaler")))}u.isMDXComponent=!0}}]);