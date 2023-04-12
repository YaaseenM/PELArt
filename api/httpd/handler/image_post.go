package handler

import (
	"net/http"
	"GoRestAPI/platform/image"

	"github.com/gin-gonic/gin"
	"github.com/olahol/go-imageupload"
)

type imagePostRequest struct {
	CurrentImage *imageupload.Image `json:"currentImage"`
}

func ImagePost(pictures image.Adder) gin.HandlerFunc {
	return func(c *gin.Context) {
		requestBody := imagePostRequest{}
		c.Bind(&requestBody)

		if requestBody.CurrentImage == nil {
            c.AbortWithStatus(http.StatusNotFound)
            return
        }

		item := image.Item{
			CurrentImage: requestBody.CurrentImage,
		}
		pictures.Add(item)

		requestBody.CurrentImage.Write(c.Writer)

		c.Status(http.StatusNoContent)

	}
}