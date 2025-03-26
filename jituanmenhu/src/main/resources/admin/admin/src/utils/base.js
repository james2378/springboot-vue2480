const base = {
    get() {
        return {
            url : "http://localhost:8080/jituanmenhu/",
            name: "jituanmenhu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jituanmenhu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "集团门户网站"
        } 
    }
}
export default base
