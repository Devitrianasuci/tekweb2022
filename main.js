const data = {
  data () {
    return {
      content : {
        nama : "Devi Triana Suci",
        deskripsi : "Sebuah perjalanan ilmu menjelajah kode. Disini saya berbagi tentang perjalanan saya menjelajah berbagai bahasa kode komputer."
      },
      social_media : {
        instagram : {
          id : 0,
          username : "devi triana",
          link : "https://instagram.com/detroyfx"
        },
        Tiktok : {
          id : 1,
          username : "menyon",
          link : "https://www.tiktok.com/@menyonnn__?lang=id-ID"
        },
        youtube : {
          id : 2,
          username : "devitriana",
          link : "https://www.youtube.com/channel/UCnvQ-f17cZduon6idsEaDOg"
        }
      },
      article : [
        {
          id : 1,
          image : "./images/html11.jpg",
          heading : "HyperText Markup Language (HTML)",
          deskripsi : "intermediate"
        },
        {
          id : 2,
          image : "./images/css1.jpg",
          heading : "Cascading Style Sheets",
          deskripsi : "intermediate"
        },
        {
          id : 3,
          image : "./images/js1.jpg",
          heading : "Java Script (JS)",
          deskripsi : "intermediate"
        }
      ],
      skill : [
        {
          image : "./images/python1.jpg",
          nama : "Java Script",
          level : "intermediate"
        },
        {
          image : "./images/sql.jpg",
          nama : "HTML",
          level : "intermediate"
        }
      ]
    }
  }
}
Vue.createApp(data).mount('#app');