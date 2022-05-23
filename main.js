Vue.createApp({
  data() {
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
          articles: [],
          article: null,
      };
  },
  methods: {
      getArticles() {
          axios
              .get(
                  "https://my-json-server.typicode.com/Devitrianasuci/tekweb2022/artikel"
              )
              .then((res) => {
                  this.articles = res.data;
              })
              .catch((error) => {
                  console.log(error);
              });
      },
      getMarkdown() {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const articles = urlParams.get('article');
          var converter = new showdown.Converter();
          console.log(articles);
          axios
              .get(
                  src = "https://raw.githubusercontent.com/Devitrianasuci/tekweb2022/main/artikel/" + articles
              )
              .then((res) => {
                  var html = converter.makeHtml(res.data);
                  this.article = html;
                  console.log(html);
              })
              .catch((error) => {
                  console.log(error);
              });
      }
  },

  beforeMount() {
          this.getArticles(),
          this.getMarkdown()
  }
}).mount("#app");