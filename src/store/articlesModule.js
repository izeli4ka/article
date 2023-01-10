import axios from "axios";

export const articlesModule = {
    state: () => ({
        articleSearchQuery: '',
        isLoading: false,
        articles: [],
        filteredArticles: []
    }),
    getters: {
        filteredArticles(state) {
            return state.articles.filter(element => 
                element.name?.toLowerCase().includes(state.articleSearchQuery.toLowerCase()) 
                || element.shortDesc?.toLowerCase().includes(state.articleSearchQuery.toLowerCase()));
        },
        slidesArticles(state) {
            return state.articles.filter(element => !!element.slider);
        }
    },
    mutations: {
        setArticles(state, articles) {
            state.articles = articles;
        },
        setArticleSearchQuery(state, articleSearchQuery) {
            state.articleSearchQuery = articleSearchQuery;
        },
        setLoading(state, bool) {
            state.isLoading = bool;
        },
        setFilteredArticles(state, filteredArticles) {
            state.filteredArticles = filteredArticles;
        }
    },
    actions: {
        async loadingArticles({commit}) {
            try {
                commit('setLoading', true);
                commit('setArticles', []);

                const { data } = await axios.get('/articles.json');
                commit('setArticles', data);
            }
            catch (e) {

            }
            finally {
                commit('setLoading', false);
            }
            
        },
        async loadingArticle({}, id) {
            try {
                const { data } = await axios.get('/articles.json');
                return data.find(el => el.id == id);
            }
            catch (e) {

            }
        },
        clearArticleSearchQuery({commit}) {
            commit('setArticleSearchQuery', '');
        }
    },
    namespaced: true
}