class ActivityLocationSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :activity
  belongs_to :location
end
