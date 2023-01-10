import { createStore } from "vuex";
import { articlesModule } from "./articlesModule";

export default createStore({
    modules: {
        articles: articlesModule
    }
})