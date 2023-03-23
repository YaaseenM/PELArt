package handler

import (
	"net/http"
	"GoRestAPI/platform/newsfeed"

	"github.com/gin-gonic/gin"
)

type newsfeedPostRequest struct {
	Email string `json:"email"`
	Password string `json:"password"`
	FullName string `json:"fullname"`
}

func NewsfeedPost(feed newsfeed.Adder) gin.HandlerFunc {
	return func(c *gin.Context) {
		requestBody := newsfeedPostRequest{}
		c.Bind(&requestBody)

		item := newsfeed.Item{
			Email: requestBody.Email,
			Password: requestBody.Password,
			FullName: requestBody.FullName,
		}
		feed.Add(item)

		c.Status(http.StatusNoContent)

	}
}