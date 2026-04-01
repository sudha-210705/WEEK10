import { create } from "zustand"
import axios from "axios"

export const useArticle = create((set)=>({

  loading:false,
  error:null,
  articles:[],

  // GET ALL ARTICLES
  getAllArticles: async () => {

    try{

      // start loading
      set({loading:true,error:null})

      const res = await axios.get(
        "http://localhost:4000/user-api/articles",
        {withCredentials:true}
      )

      // update state
      set({
        loading:false,
        articles: res.data.payload,
        error:null
      })

    }
    catch(err){

      set({
        loading:false,
        error: err.response?.data?.error || "Fetching articles failed"
      })

    }

  },
  getAuthorArticles: async(authorId)=>{

  try{

    set({loading:true,error:null})

    let res = await axios.get(
      `http://localhost:4000/author-api/articles/${authorId}`,
      {withCredentials:true}
    )

    set({
      loading:false,
      articles:res.data.payload
    })

  }
  catch(err){

    set({
      loading:false,
      error:err.response?.data?.error || "Fetching failed"
    })

  }

}

}))