# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180208192840) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.integer "lender_id", null: false
    t.integer "lendee_id", null: false
    t.string "title", null: false
    t.string "description"
    t.decimal "amount", precision: 16, scale: 2, null: false
    t.boolean "settled", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lendee_id"], name: "index_bills_on_lendee_id"
    t.index ["lender_id"], name: "index_bills_on_lender_id"
  end

  create_table "friends", force: :cascade do |t|
    t.integer "friender_id", null: false
    t.integer "friendee_id", null: false
    t.string "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["friender_id", "friendee_id"], name: "index_friends_on_friender_id_and_friendee_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
