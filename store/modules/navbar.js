const state = ()=>(
  {
    app : []
  }
)
//Mutation 必须是同步函数
const mutations = {
  add(state,text){
    state.app.push(text)
  }
}

const actions = {
  add:({commit},text)=>{
    commit('add',text)
  }
}

export default {
  namespaced:true,
  state,
  mutations,
  actions
}
