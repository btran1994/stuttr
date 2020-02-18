class Photo < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :user

    has_many :groups

    has_many :albums 

    has_one_attached :image
end
