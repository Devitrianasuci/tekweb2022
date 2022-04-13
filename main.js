Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {
          title: "Devi triano",
          description:
            "Ini adalah tempat saya untuk berbagi segala pengetahuan yang saya peroleh tentang koding dan teknologi.",
          social: {
            ig: {
              url: "https://instagram.com/detroyfx",
              title: "devi triana",
            },
            TikTok: {
                "url": "https://www.tiktok.com/@menyonnn__?lang=id-ID",
                "title": "devitriana"
            }
            yt: {
              url: "https://www.youtube.com/channel/UCnvQ-f17cZduon6idsEaDOg",
              title: "devi triana",
            },
          },
          imageProfile:
             "https://raw.githubusercontent.com/Devitrianasuci/tekweb2022/master/images/dep.png",
        },  
        articles: [
          {
            title: 'The Magic of Vue',
            description: "This is your first looping using Vue",
            thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
          }
        ]
      };
    },
    mounted:()=>{    
      axios.get("https://raw.githubusercontent.com/Devitrianasuci/tekweb2022/master/content/header.json")
      .then((res)=>{
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }).mount("#app");