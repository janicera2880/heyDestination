class ActivityLocationSerializer < ActiveModel::Serializer
  attributes :id, :activity_id, :location_id

  belongs_to :activity
  belongs_to :location
end