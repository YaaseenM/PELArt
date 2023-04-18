package handler

import (
	"net/http"
  
	"github.com/gin-gonic/gin"
	"GoRestAPI/platform/newsfeed"
  )

  type newsfeedPatchRequest struct {
	ImageList []string `json:"imageList"`
}

  func NewsfeedPatch(feed newsfeed.Patcher) gin.HandlerFunc {
	return func(c *gin.Context) {
		fullName := c.Param("fullName")
		requestBody := newsfeedPatchRequest{}
		c.Bind(&requestBody)

		err := feed.Patch(fullName, requestBody.ImageList)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		c.Status(http.StatusNoContent)
	}
}

