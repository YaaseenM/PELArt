package main

import (
  "GoRestAPI/httpd/handler"
  "GoRestAPI/platform/newsfeed"

  "github.com/gin-gonic/gin"
)

func main() {
  feed := newsfeed.New()
  r := gin.Default()
  
  api :=r.Group("/api")
  {
  api.GET("/ping", handler.PingGet())
  api.GET("/newsfeed", handler.NewsfeedGet(feed))
  api.POST("/newsfeed", handler.NewsfeedPost(feed))

  r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
  }

}