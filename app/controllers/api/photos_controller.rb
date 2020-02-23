class Api::PhotosController < ApplicationController
    def create
        @photo = Photo.new(photo_params)
        # debugger
        if @photo.save
            render 'api/photos/_show'
        else
            render json: ['error'], status: 402
        end
    end

    def index
        @photos = Photo.all
        render 'api/photos/index'
    end

    def show
        @photo = Photo.find(params[:id]) rescue nil
        if @photo
            render 'api/photos/_show'
        else
            render json: ['photo does not exist'], status: 422
        end
    end

    def update
    end

    def destroy
        @photo = Photo.find(params[:id]) rescue nil
        if @photo.destroy
            render 'api/photos/_show'
        else
            render json: ['failed to delete photo.'], status: 401
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :user_id, :image, :photo, :pfp)
    end
end
