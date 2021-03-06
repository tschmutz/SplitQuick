# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  attr_reader :password


  has_many :bills_owed,
    primary_key: :id,
    foreign_key: :lendee_id,
    class_name: :Bill

  has_many :bills_lent,
    primary_key: :id,
    foreign_key: :lender_id,
    class_name: :Bill

  has_many :friendee_friendships,
    primary_key: :id,
    foreign_key: :friendee_id,
    class_name: :Friend

  has_many :friender_friendships,
    primary_key: :id,
    foreign_key: :friender_id,
    class_name: :Friend

  has_many :frienders,
    through: :friendee_friendships,
    source: :friender

  has_many :friendees,
    through: :friender_friendships,
    source: :friendee


  def self.find_user_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
