// ============================================================================
// CORE/COMMON TYPES
// ============================================================================

/** This object represents an incoming update. */
export interface Update {
  update_id: number;
  message?: Message;
  edited_message?: Message;
  channel_post?: Message;
  edited_channel_post?: Message;
  business_connection?: BusinessConnection;
  business_message?: Message;
  edited_business_message?: Message;
  deleted_business_messages?: BusinessMessagesDeleted;
  message_reaction?: MessageReactionUpdated;
  message_reaction_count?: MessageReactionCountUpdated;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallbackQuery;
  shipping_query?: ShippingQuery;
  pre_checkout_query?: PreCheckoutQuery;
  purchased_paid_media?: PaidMediaPurchased;
  poll?: Poll;
  poll_answer?: PollAnswer;
  my_chat_member?: ChatMemberUpdated;
  chat_member?: ChatMemberUpdated;
  chat_join_request?: ChatJoinRequest;
  chat_boost?: ChatBoostUpdated;
  removed_chat_boost?: ChatBoostRemoved;
}

/** Contains information about the current status of a webhook. */
export interface WebhookInfo {
  url: string;
  has_custom_certificate: boolean;
  pending_update_count: number;
  ip_address?: string;
  last_error_date?: number;
  last_error_message?: string;
  last_synchronization_error_date?: number;
  max_connections?: number;
  allowed_updates?: string[];
}

/** This object represents a Telegram user or bot. */
export interface User {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: true;
  added_to_attachment_menu?: true;
  can_join_groups?: boolean;
  can_read_all_group_messages?: boolean;
  supports_inline_queries?: boolean;
  can_connect_to_business?: boolean;
  has_main_web_app?: boolean;
}

/** This object represents a chat. */
export interface Chat {
  id: number;
  type: 'private' | 'group' | 'supergroup' | 'channel';
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  is_forum?: true;
  is_direct_messages?: true;
  accent_color_id?: number;
  max_reaction_count?: number;
  photo?: ChatPhoto;
  active_usernames?: string[];
  birthdate?: Birthdate;
  business_intro?: BusinessIntro;
  business_location?: BusinessLocation;
  business_opening_hours?: BusinessOpeningHours;
  personal_chat?: Chat;
  parent_chat?: Chat;
  available_reactions?: ReactionType[];
  background_custom_emoji_id?: string;
  profile_accent_color_id?: number;
  profile_background_custom_emoji_id?: string;
  emoji_status_custom_emoji_id?: string;
  emoji_status_expiration_date?: number;
  bio?: string;
  has_private_forwards?: true;
  has_restricted_voice_and_video_messages?: true;
  join_to_send_messages?: true;
  join_by_request?: true;
  description?: string;
  invite_link?: string;
  pinned_message?: Message;
  permissions?: ChatPermissions;
  accepted_gift_types?: AcceptedGiftTypes;
  can_send_paid_media?: true;
  slow_mode_delay?: number;
  unrestrict_boost_count?: number;
  message_auto_delete_time?: number;
  has_aggressive_anti_spam_enabled?: true;
  has_hidden_members?: true;
  has_protected_content?: true;
  has_visible_history?: true;
  sticker_set_name?: string;
  can_set_sticker_set?: true;
  custom_emoji_sticker_set_name?: string;
  linked_chat_id?: number;
  location?: ChatLocation;
}

// ============================================================================
// MESSAGE TYPES
// ============================================================================

/** This object represents a message. */
export interface Message {
  message_id: number;
  message_thread_id?: number;
  direct_messages_topic?: DirectMessagesTopic;
  from?: User;
  sender_chat?: Chat;
  sender_boost_count?: number;
  sender_business_bot?: User;
  date: number;
  business_connection_id?: string;
  chat: Chat;
  forward_origin?: MessageOrigin;
  is_topic_message?: true;
  is_automatic_forward?: true;
  reply_to_message?: Message;
  external_reply?: ExternalReplyInfo;
  quote?: TextQuote;
  reply_to_story?: Story;
  reply_to_checklist_task_id?: number;
  via_bot?: User;
  edit_date?: number;
  has_protected_content?: true;
  is_from_offline?: true;
  is_paid_post?: true;
  media_group_id?: string;
  author_signature?: string;
  paid_star_count?: number;
  text?: string;
  entities?: MessageEntity[];
  link_preview_options?: LinkPreviewOptions;
  suggested_post_info?: SuggestedPostInfo;
  effect_id?: string;
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  paid_media?: PaidMediaInfo;
  photo?: PhotoSize[];
  sticker?: Sticker;
  story?: Story;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  caption?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: true;
  has_media_spoiler?: true;
  checklist?: Checklist;
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  poll?: Poll;
  venue?: Venue;
  location?: Location;
  new_chat_members?: User[];
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: PhotoSize[];
  delete_chat_photo?: true;
  group_chat_created?: true;
  supergroup_chat_created?: true;
  channel_chat_created?: true;
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: MaybeInaccessibleMessage;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  refunded_payment?: RefundedPayment;
  users_shared?: UsersShared;
  chat_shared?: ChatShared;
  gift?: GiftInfo;
  unique_gift?: UniqueGiftInfo;
  connected_website?: string;
  write_access_allowed?: WriteAccessAllowed;
  passport_data?: PassportData;
  proximity_alert_triggered?: ProximityAlertTriggered;
  boost_added?: ChatBoostAdded;
  chat_background_set?: ChatBackground;
  checklist_tasks_done?: ChecklistTasksDone;
  checklist_tasks_added?: ChecklistTasksAdded;
  direct_message_price_changed?: DirectMessagePriceChanged;
  forum_topic_created?: ForumTopicCreated;
  forum_topic_edited?: ForumTopicEdited;
  forum_topic_closed?: ForumTopicClosed;
  forum_topic_reopened?: ForumTopicReopened;
  general_forum_topic_hidden?: GeneralForumTopicHidden;
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
  giveaway_created?: GiveawayCreated;
  giveaway?: Giveaway;
  giveaway_winners?: GiveawayWinners;
  giveaway_completed?: GiveawayCompleted;
  paid_message_price_changed?: PaidMessagePriceChanged;
  suggested_post_approved?: SuggestedPostApproved;
  suggested_post_approval_failed?: SuggestedPostApprovalFailed;
  suggested_post_declined?: SuggestedPostDeclined;
  suggested_post_paid?: SuggestedPostPaid;
  suggested_post_refunded?: SuggestedPostRefunded;
  video_chat_scheduled?: VideoChatScheduled;
  video_chat_started?: VideoChatStarted;
  video_chat_ended?: VideoChatEnded;
  video_chat_participants_invited?: VideoChatParticipantsInvited;
  web_app_data?: WebAppData;
  reply_markup?: InlineKeyboardMarkup;
}

/** This object represents a unique message identifier. */
export interface MessageId {
  message_id: number;
}

/** This object describes a message that was deleted or is otherwise inaccessible to the bot. */
export interface InaccessibleMessage {
  chat: Chat;
  message_id: number;
  date: number;
}

/** Type alias for messages that can be inaccessible. */
export type MaybeInaccessibleMessage = Message | InaccessibleMessage;

/** This object represents one special entity in a text message. */
export interface MessageEntity {
  type: 'mention' | 'hashtag' | 'cashtag' | 'bot_command' | 'url' | 'email' | 'phone_number' | 
         'bold' | 'italic' | 'underline' | 'strikethrough' | 'spoiler' | 'blockquote' | 
         'expandable_blockquote' | 'code' | 'pre' | 'text_link' | 'text_mention' | 'custom_emoji';
  offset: number;
  length: number;
  url?: string;
  user?: User;
  language?: string;
  custom_emoji_id?: string;
}

/** This object contains information about the quoted part of a message. */
export interface TextQuote {
  text: string;
  entities?: MessageEntity[];
  position: number;
  is_manual?: true;
}

/** This object contains information about a message being replied to from another chat. */
export interface ExternalReplyInfo {
  origin: MessageOrigin;
  chat?: Chat;
  message_id?: number;
  link_preview_options?: LinkPreviewOptions;
  animation?: Animation;
  audio?: Audio;
  document?: Document;
  paid_media?: PaidMediaInfo;
  photo?: PhotoSize[];
  sticker?: Sticker;
  story?: Story;
  video?: Video;
  video_note?: VideoNote;
  voice?: Voice;
  has_media_spoiler?: true;
  checklist?: Checklist;
  contact?: Contact;
  dice?: Dice;
  game?: Game;
  giveaway?: Giveaway;
  giveaway_winners?: GiveawayWinners;
  invoice?: Invoice;
  location?: Location;
  poll?: Poll;
  venue?: Venue;
}

/** This object describes reply parameters for the message being sent. */
export interface ReplyParameters {
  message_id: number;
  chat_id?: number | string;
  allow_sending_without_reply?: boolean;
  quote?: string;
  quote_parse_mode?: string;
  quote_entities?: MessageEntity[];
  quote_position?: number;
  checklist_task_id?: number;
}

/** This object describes the origin of a message. */
export type MessageOrigin = MessageOriginUser | MessageOriginHiddenUser | 
                            MessageOriginChat | MessageOriginChannel;

export interface MessageOriginUser {
  type: 'user';
  date: number;
  sender_user: User;
}

export interface MessageOriginHiddenUser {
  type: 'hidden_user';
  date: number;
  sender_user_name: string;
}

export interface MessageOriginChat {
  type: 'chat';
  date: number;
  sender_chat: Chat;
  author_signature?: string;
}

export interface MessageOriginChannel {
  type: 'channel';
  date: number;
  chat: Chat;
  message_id: number;
  author_signature?: string;
}

// ============================================================================
// MEDIA TYPES
// ============================================================================

/** This object represents one size of a photo or a file/sticker thumbnail. */
export interface PhotoSize {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  file_size?: number;
}

/** This object represents an animation file. */
export interface Animation {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumbnail?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

/** This object represents an audio file to be treated as music. */
export interface Audio {
  file_id: string;
  file_unique_id: string;
  duration: number;
  performer?: string;
  title?: string;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
  thumbnail?: PhotoSize;
}

/** This object represents a general file. */
export interface Document {
  file_id: string;
  file_unique_id: string;
  thumbnail?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

/** This object represents a story. */
export interface Story {
  chat: Chat;
  id: number;
}

/** This object represents a video file. */
export interface Video {
  file_id: string;
  file_unique_id: string;
  width: number;
  height: number;
  duration: number;
  thumbnail?: PhotoSize;
  cover?: PhotoSize[];
  start_timestamp?: number;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
}

/** This object represents a video message. */
export interface VideoNote {
  file_id: string;
  file_unique_id: string;
  length: number;
  duration: number;
  thumbnail?: PhotoSize;
  file_size?: number;
}

/** This object represents a voice message. */
export interface Voice {
  file_id: string;
  file_unique_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
}

/** This object describes the paid media added to a message. */
export interface PaidMediaInfo {
  star_count: number;
  paid_media: PaidMedia[];
}

export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo;

export interface PaidMediaPreview {
  type: 'preview';
  width?: number;
  height?: number;
  duration?: number;
}

export interface PaidMediaPhoto {
  type: 'photo';
  photo: PhotoSize[];
}

export interface PaidMediaVideo {
  type: 'video';
  video: Video;
}

/** This object represents a phone contact. */
export interface Contact {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
  vcard?: string;
}

/** This object represents an animated emoji that displays a random value. */
export interface Dice {
  emoji: string;
  value: number;
}

/** This object contains information about one answer option in a poll. */
export interface PollOption {
  text: string;
  text_entities?: MessageEntity[];
  voter_count: number;
}

export interface PollOptionInput {
  text: string;
  text_parse_mode?: string;
  text_entities?: MessageEntity[];
}

/** This object represents an answer of a user in a non-anonymous poll. */
export interface PollAnswer {
  poll_id: string;
  voter_chat?: Chat;
  user?: User;
  option_ids: number[];
}

/** This object contains information about a poll. */
export interface Poll {
  id: string;
  question: string;
  question_entities?: MessageEntity[];
  options: PollOption[];
  total_voter_count: number;
  is_closed: boolean;
  is_anonymous: boolean;
  type: 'regular' | 'quiz';
  allows_multiple_answers: boolean;
  correct_option_id?: number;
  explanation?: string;
  explanation_entities?: MessageEntity[];
  open_period?: number;
  close_date?: number;
}

/** This object describes a task in a checklist. */
export interface ChecklistTask {
  id: number;
  text: string;
  text_entities?: MessageEntity[];
  completed_by_user?: User;
  completion_date?: number;
}

/** This object describes a checklist. */
export interface Checklist {
  title: string;
  title_entities?: MessageEntity[];
  tasks: ChecklistTask[];
  others_can_add_tasks?: true;
  others_can_mark_tasks_as_done?: true;
}

export interface InputChecklistTask {
  id: number;
  text: string;
  parse_mode?: string;
  text_entities?: MessageEntity[];
}

export interface InputChecklist {
  title: string;
  parse_mode?: string;
  title_entities?: MessageEntity[];
  tasks: InputChecklistTask[];
  others_can_add_tasks?: boolean;
  others_can_mark_tasks_as_done?: boolean;
}

/** This object describes a service message about checklist tasks marked as done or not done. */
export interface ChecklistTasksDone {
  checklist_message?: Message;
  marked_as_done_task_ids?: number[];
  marked_as_not_done_task_ids?: number[];
}

/** This object describes a service message about tasks added to a checklist. */
export interface ChecklistTasksAdded {
  checklist_message?: Message;
  tasks: ChecklistTask[];
}

/** This object represents a point on the map. */
export interface Location {
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
}

/** This object represents a venue. */
export interface Venue {
  location: Location;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
}

/** This object represents data sent from a Web App to the bot. */
export interface WebAppData {
  data: string;
  button_text: string;
}

/** This object represents the content of a service message about proximity alert. */
export interface ProximityAlertTriggered {
  traveler: User;
  watcher: User;
  distance: number;
}

/** This object represents a service message about auto-delete timer settings change. */
export interface MessageAutoDeleteTimerChanged {
  message_auto_delete_time: number;
}

/** This object represents a service message about a user boosting a chat. */
export interface ChatBoostAdded {
  boost_count: number;
}

// Background types
export type BackgroundFill = BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient;

export interface BackgroundFillSolid {
  type: 'solid';
  color: number;
}

export interface BackgroundFillGradient {
  type: 'gradient';
  top_color: number;
  bottom_color: number;
  rotation_angle: number;
}

export interface BackgroundFillFreeformGradient {
  type: 'freeform_gradient';
  colors: number[];
}

export type BackgroundType = BackgroundTypeFill | BackgroundTypeWallpaper | 
                             BackgroundTypePattern | BackgroundTypeChatTheme;

export interface BackgroundTypeFill {
  type: 'fill';
  fill: BackgroundFill;
  dark_theme_dimming: number;
}

export interface BackgroundTypeWallpaper {
  type: 'wallpaper';
  document: Document;
  dark_theme_dimming: number;
  is_blurred?: true;
  is_moving?: true;
}

export interface BackgroundTypePattern {
  type: 'pattern';
  document: Document;
  fill: BackgroundFill;
  intensity: number;
  is_inverted?: true;
  is_moving?: true;
}

export interface BackgroundTypeChatTheme {
  type: 'chat_theme';
  theme_name: string;
}

/** This object represents a chat background. */
export interface ChatBackground {
  type: BackgroundType;
}

/** This object represents a service message about a new forum topic created in the chat. */
export interface ForumTopicCreated {
  name: string;
  icon_color: number;
  icon_custom_emoji_id?: string;
}

export interface ForumTopicClosed {}

/** This object represents a service message about an edited forum topic. */
export interface ForumTopicEdited {
  name?: string;
  icon_custom_emoji_id?: string;
}

export interface ForumTopicReopened {}
export interface GeneralForumTopicHidden {}
export interface GeneralForumTopicUnhidden {}

/** This object contains information about a user that was shared with the bot. */
export interface SharedUser {
  user_id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo?: PhotoSize[];
}

/** This object contains information about the users whose identifiers were shared with the bot. */
export interface UsersShared {
  request_id: number;
  users: SharedUser[];
}

/** This object contains information about a chat that was shared with the bot. */
export interface ChatShared {
  request_id: number;
  chat_id: number;
  title?: string;
  username?: string;
  photo?: PhotoSize[];
}

/** This object represents a service message about a user allowing the bot to write messages. */
export interface WriteAccessAllowed {
  from_request?: boolean;
  web_app_name?: string;
  from_attachment_menu?: boolean;
}

/** This object represents a service message about a video chat scheduled in the chat. */
export interface VideoChatScheduled {
  start_date: number;
}

export interface VideoChatStarted {}

/** This object represents a service message about a video chat ended in the chat. */
export interface VideoChatEnded {
  duration: number;
}

/** This object represents a service message about new members invited to a video chat. */
export interface VideoChatParticipantsInvited {
  users: User[];
}

/** This object describes a service message about a change in the price of paid messages. */
export interface PaidMessagePriceChanged {
  paid_message_star_count: number;
}

/** This object describes a service message about a change in the price of direct messages. */
export interface DirectMessagePriceChanged {
  are_direct_messages_enabled: boolean;
  direct_message_star_count?: number;
}

// Suggested post related types
export interface SuggestedPostApproved {
  suggested_post_message?: Message;
  price?: SuggestedPostPrice;
  send_date: number;
}

export interface SuggestedPostApprovalFailed {
  suggested_post_message?: Message;
  price?: SuggestedPostPrice;
}

export interface SuggestedPostDeclined {
  suggested_post_message?: Message;
  comment?: string;
}

export interface SuggestedPostPaid {
  suggested_post_message?: Message;
  currency: string;
  amount?: number;
  star_amount?: StarAmount;
}

export interface SuggestedPostRefunded {
  suggested_post_message?: Message;
  reason: string;
}

export interface GiveawayCreated {
  prize_star_count?: number;
}

export interface Giveaway {
  chats: Chat[];
  winners_selection_date: number;
  winner_count: number;
  only_new_members?: true;
  has_public_winners?: true;
  prize_description?: string;
  country_codes?: string[];
  prize_star_count?: number;
  premium_subscription_month_count?: number;
}

export interface GiveawayWinners {
  chat: Chat;
  giveaway_message_id: number;
  winners_selection_date: number;
  winner_count: number;
  winners: User[];
  additional_chat_count?: number;
  prize_star_count?: number;
  premium_subscription_month_count?: number;
  unclaimed_prize_count?: number;
  only_new_members?: true;
  was_refunded?: true;
  prize_description?: string;
}

export interface GiveawayCompleted {
  winner_count: number;
  unclaimed_prize_count?: number;
  giveaway_message?: Message;
  is_star_giveaway?: true;
}

export interface LinkPreviewOptions {
  is_disabled?: boolean;
  url?: string;
  prefer_small_media?: boolean;
  prefer_large_media?: boolean;
  show_above_text?: boolean;
}

export interface SuggestedPostPrice {
  currency: string;
  amount: number;
}

export interface SuggestedPostInfo {
  state: 'pending' | 'approved' | 'declined';
  price?: SuggestedPostPrice;
  send_date?: number;
}

export interface InputSuggestedPostInfo {
  price?: SuggestedPostPrice;
  send_date?: number;
}

export interface DirectMessagesTopic {
  topic_id: number;
  user?: User;
}

// ============================================================================
// USER & CHAT RELATED TYPES
// ============================================================================

/** This object represent a user's profile pictures. */
export interface UserProfilePhotos {
  total_count: number;
  photos: PhotoSize[][];
}

/** This object represents a file ready to be downloaded. */
export interface File {
  file_id: string;
  file_unique_id: string;
  file_size?: number;
  file_path?: string;
}

/** This object describes a Web App. */
export interface WebAppInfo {
  url: string;
}

export interface ChatPhoto {
  small_file_id: string;
  small_file_unique_id: string;
  big_file_id: string;
  big_file_unique_id: string;
}

export interface Birthdate {
  day: number;
  month: number;
  year?: number;
}

export interface BusinessIntro {
  title?: string;
  description?: string;
  sticker?: Sticker;
}

export interface BusinessLocation {
  address: string;
  location?: Location;
}

export interface BusinessOpeningHours {
  time_zone_name: string;
  opening_hours: BusinessOpeningHoursInterval[];
}

export interface BusinessOpeningHoursInterval {
  opening_minute: number;
  closing_minute: number;
}

export interface BusinessConnection {
  id: string;
  user: User;
  date: number;
  can_reply: boolean;
  is_enabled: boolean;
}

export interface BusinessMessagesDeleted {
  business_connection_id: string;
  chat_id: number;
  message_ids: number[];
}

// Chat member types
export type ChatMember = ChatMemberOwner | ChatMemberAdministrator | 
                        ChatMemberMember | ChatMemberRestricted | 
                        ChatMemberLeft | ChatMemberKicked;

export interface ChatMemberOwner {
  status: 'creator';
  user: User;
  is_anonymous: boolean;
  custom_title?: string;
}

export interface ChatMemberAdministrator {
  status: 'administrator';
  user: User;
  can_be_edited: boolean;
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_voice_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_stories: boolean;
  can_edit_stories: boolean;
  can_delete_stories: boolean;
  can_manage_topics: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_pin_messages?: boolean;
  can_manage_paid_media?: boolean;
  custom_title?: string;
}

export interface ChatMemberMember {
  status: 'member';
  user: User;
}

export interface ChatMemberRestricted {
  status: 'restricted';
  user: User;
  is_member: boolean;
  can_send_messages: boolean;
  can_send_audios: boolean;
  can_send_documents: boolean;
  can_send_photos: boolean;
  can_send_videos: boolean;
  can_send_video_notes: boolean;
  can_send_voice_notes: boolean;
  can_send_polls: boolean;
  can_send_other_messages: boolean;
  can_add_web_page_previews: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_pin_messages: boolean;
  can_manage_topics: boolean;
  until_date: number;
}

export interface ChatMemberLeft {
  status: 'left';
  user: User;
}

export interface ChatMemberKicked {
  status: 'kicked';
  user: User;
  until_date: number;
}

/** This object represents a change in the status of a member of a chat. */
export interface ChatMemberUpdated {
  chat: Chat;
  from: User;
  date: number;
  old_chat_member: ChatMember;
  new_chat_member: ChatMember;
  invite_link?: ChatInviteLink;
  via_chat_folder_invite_link?: boolean;
  via_business_introduction_link?: boolean;
}

/** This object represents a request to join the chat. */
export interface ChatJoinRequest {
  chat: Chat;
  from: User;
  user_chat_id: number;
  date: number;
  bio?: string;
  invite_link?: ChatInviteLink;
}

export interface ChatInviteLink {
  invite_link: string;
  creator: User;
  creates_join_request: boolean;
  is_primary: boolean;
  is_revoked: boolean;
  name?: string;
  expire_date?: number;
  member_limit?: number;
  pending_join_request_count?: number;
}

export interface ChatAdministratorRights {
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_voice_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_stories?: boolean;
  can_edit_stories?: boolean;
  can_delete_stories?: boolean;
  can_manage_topics?: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_pin_messages?: boolean;
  can_manage_paid_media?: boolean;
}

/** This object represents default chat member permissions. */
export interface ChatPermissions {
  can_send_messages?: boolean;
  can_send_audios?: boolean;
  can_send_documents?: boolean;
  can_send_photos?: boolean;
  can_send_videos?: boolean;
  can_send_video_notes?: boolean;
  can_send_voice_notes?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
  can_manage_topics?: boolean;
}

export interface ChatLocation {
  location: Location;
  address: string;
}

// Reaction types
export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid;

export interface ReactionTypeEmoji {
  type: 'emoji';
  emoji: string;
}

export interface ReactionTypeCustomEmoji {
  type: 'custom_emoji';
  custom_emoji_id: string;
}

export interface ReactionTypePaid {
  type: 'paid';
}

export interface ReactionCount {
  type: ReactionType;
  total_count: number;
}

export interface MessageReactionUpdated {
  chat: Chat;
  message_id: number;
  user?: User;
  actor_chat?: Chat;
  date: number;
  old_reaction: ReactionType[];
  new_reaction: ReactionType[];
}

export interface MessageReactionCountUpdated {
  chat: Chat;
  message_id: number;
  date: number;
  reactions: ReactionCount[];
}

export interface ForumTopic {
  message_thread_id: number;
  name: string;
  icon_color: number;
  icon_custom_emoji_id?: string;
}

// ============================================================================
// GIFT TYPES
// ============================================================================

export interface Gift {
  id: string;
  sticker: Sticker;
  star_count: number;
  upgrade_star_count?: number;
  total_count?: number;
  remaining_count?: number;
  publisher_chat?: Chat;
}

export interface Gifts {
  gifts: Gift[];
}

export interface UniqueGiftModel {
  name: string;
  sticker: Sticker;
  rarity_per_mille: number;
}

export interface UniqueGiftSymbol {
  name: string;
  sticker: Sticker;
  rarity_per_mille: number;
}

export interface UniqueGiftBackdropColors {
  center_color: number;
  edge_color: number;
  symbol_color: number;
  text_color: number;
}

export interface UniqueGiftBackdrop {
  name: string;
  colors: UniqueGiftBackdropColors;
  rarity_per_mille: number;
}

export interface UniqueGift {
  base_name: string;
  name: string;
  number: number;
  model: UniqueGiftModel;
  symbol: UniqueGiftSymbol;
  backdrop: UniqueGiftBackdrop;
  publisher_chat?: Chat;
}

export interface GiftInfo {
  gift: Gift;
  owned_gift_id?: string;
  convert_star_count?: number;
  prepaid_upgrade_star_count?: number;
  can_be_upgraded?: true;
  text?: string;
  entities?: MessageEntity[];
  is_private?: true;
}

export interface UniqueGiftInfo {
  gift: UniqueGift;
  origin: string;
  last_resale_star_count?: number;
  owned_gift_id?: string;
  transfer_star_count?: number;
  next_transfer_date?: number;
}

export type OwnedGift = OwnedGiftRegular | OwnedGiftUnique;

export interface OwnedGiftRegular {
  type: 'regular';
  gift: Gift;
  owned_gift_id?: string;
  sender_user?: User;
  send_date: number;
  text?: string;
  entities?: MessageEntity[];
  is_private?: true;
  is_saved?: true;
  can_be_upgraded?: true;
  was_refunded?: true;
  convert_star_count?: number;
  prepaid_upgrade_star_count?: number;
}

export interface OwnedGiftUnique {
  type: 'unique';
  gift: UniqueGift;
  owned_gift_id?: string;
  sender_user?: User;
  send_date: number;
  is_saved?: true;
  can_be_transferred?: true;
  transfer_star_count?: number;
  next_transfer_date?: number;
}

export interface OwnedGifts {
  total_count: number;
  gifts: OwnedGift[];
  next_offset?: string;
}

export interface AcceptedGiftTypes {
  unlimited_gifts: boolean;
  limited_gifts: boolean;
  unique_gifts: boolean;
  premium_subscription: boolean;
}

// ============================================================================
// STICKER TYPES (Simplified - Full sticker types are extensive)
// ============================================================================

export interface Sticker {
  file_id: string;
  file_unique_id: string;
  type: 'regular' | 'mask' | 'custom_emoji';
  width: number;
  height: number;
  is_animated: boolean;
  is_video: boolean;
  thumbnail?: PhotoSize;
  emoji?: string;
  set_name?: string;
  premium_animation?: File;
  mask_position?: MaskPosition;
  custom_emoji_id?: string;
  needs_repainting?: boolean;
  file_size?: number;
}

export interface MaskPosition {
  point: 'forehead' | 'eyes' | 'mouth' | 'chin';
  x_offset: number;
  y_offset: number;
  scale: number;
}

// ============================================================================
// GAME & PAYMENT TYPES
// ============================================================================

export interface Game {
  title: string;
  description: string;
  photo: PhotoSize[];
  text?: string;
  text_entities?: MessageEntity[];
  animation?: Animation;
}

export interface Invoice {
  title: string;
  description: string;
  start_parameter: string;
  currency: string;
  total_amount: number;
}

export interface ShippingAddress {
  country_code: string;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
}

export interface OrderInfo {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address?: ShippingAddress;
}

export interface ShippingOption {
  id: string;
  title: string;
  prices: LabeledPrice[];
}

export interface LabeledPrice {
  label: string;
  amount: number;
}

export interface SuccessfulPayment {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
}

export interface RefundedPayment {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  telegram_payment_charge_id: string;
  provider_payment_charge_id?: string;
}

export interface ShippingQuery {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
}

export interface PreCheckoutQuery {
  id: string;
  from: User;
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
}

export interface PaidMediaPurchased {
  from: User;
  paid_media_info: PaidMediaInfo;
}

// ============================================================================
// KEYBOARD & BUTTON TYPES
// ============================================================================

/** This object represents a custom keyboard with reply options. */
export interface ReplyKeyboardMarkup {
  keyboard: KeyboardButton[][];
  is_persistent?: boolean;
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
}

export interface KeyboardButton {
  text: string;
  request_users?: KeyboardButtonRequestUsers;
  request_chat?: KeyboardButtonRequestChat;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
  web_app?: WebAppInfo;
}

export interface KeyboardButtonRequestUsers {
  request_id: number;
  user_is_bot?: boolean;
  user_is_premium?: boolean;
  max_quantity?: number;
  request_name?: boolean;
  request_username?: boolean;
  request_photo?: boolean;
}

export interface KeyboardButtonRequestChat {
  request_id: number;
  chat_is_channel: boolean;
  chat_is_forum?: boolean;
  chat_has_username?: boolean;
  chat_is_created?: boolean;
  user_administrator_rights?: ChatAdministratorRights;
  bot_administrator_rights?: ChatAdministratorRights;
  bot_is_member?: boolean;
  request_title?: boolean;
  request_username?: boolean;
  request_photo?: boolean;
}

export interface KeyboardButtonPollType {
  type?: 'quiz' | 'regular';
}

export interface ReplyKeyboardRemove {
  remove_keyboard: true;
  selective?: boolean;
}

/** This object represents an inline keyboard that appears right next to the message. */
export interface InlineKeyboardMarkup {
  inline_keyboard: InlineKeyboardButton[][];
}

export interface InlineKeyboardButton {
  text: string;
  url?: string;
  callback_data?: string;
  web_app?: WebAppInfo;
  login_url?: LoginUrl;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;
  callback_game?: unknown;
  pay?: boolean;
}

export interface LoginUrl {
  url: string;
  forward_text?: string;
  bot_username?: string;
  request_write_access?: boolean;
}

export interface SwitchInlineQueryChosenChat {
  allow_user_chats?: boolean;
  allow_bot_chats?: boolean;
  allow_group_chats?: boolean;
  allow_channel_chats?: boolean;
}

export interface InlineQueryResultsButton {
  text: string;
  web_app?: WebAppInfo;
  start_parameter?: string;
}

export interface ForceReply {
  force_reply: true;
  input_field_placeholder?: string;
  selective?: boolean;
}

// ============================================================================
// INLINE QUERY TYPES
// ============================================================================

export interface InlineQuery {
  id: string;
  from: User;
  query: string;
  offset: string;
  chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
  location?: Location;
}

export interface ChosenInlineResult {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
}

export type InlineQueryResult = InlineQueryResultArticle | InlineQueryResultPhoto | 
                                InlineQueryResultGif | InlineQueryResultMpeg4Gif | 
                                InlineQueryResultVideo | InlineQueryResultAudio | 
                                InlineQueryResultVoice | InlineQueryResultDocument | 
                                InlineQueryResultLocation | InlineQueryResultVenue | 
                                InlineQueryResultContact | InlineQueryResultGame |
                                InlineQueryResultCachedPhoto | InlineQueryResultCachedGif |
                                InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedSticker |
                                InlineQueryResultCachedDocument | InlineQueryResultCachedVideo |
                                InlineQueryResultCachedVoice | InlineQueryResultCachedAudio;

export interface InlineQueryResultArticle {
  type: 'article';
  id: string;
  title: string;
  input_message_content: InputMessageContent;
  reply_markup?: InlineKeyboardMarkup;
  url?: string;
  description?: string;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export interface InlineQueryResultPhoto {
  type: 'photo';
  id: string;
  photo_url: string;
  thumbnail_url: string;
  photo_width?: number;
  photo_height?: number;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultGif {
  type: 'gif';
  id: string;
  gif_url: string;
  gif_width?: number;
  gif_height?: number;
  gif_duration?: number;
  thumbnail_url: string;
  thumbnail_mime_type?: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultMpeg4Gif {
  type: 'mpeg4_gif';
  id: string;
  mpeg4_url: string;
  mpeg4_width?: number;
  mpeg4_height?: number;
  mpeg4_duration?: number;
  thumbnail_url: string;
  thumbnail_mime_type?: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultVideo {
  type: 'video';
  id: string;
  video_url: string;
  mime_type: string;
  thumbnail_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  video_width?: number;
  video_height?: number;
  video_duration?: number;
  description?: string;
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultAudio {
  type: 'audio';
  id: string;
  audio_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  performer?: string;
  audio_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultVoice {
  type: 'voice';
  id: string;
  voice_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  voice_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultDocument {
  type: 'document';
  id: string;
  title: string;
  document_url: string;
  mime_type: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export interface InlineQueryResultLocation {
  type: 'location';
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export interface InlineQueryResultVenue {
  type: 'venue';
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export interface InlineQueryResultContact {
  type: 'contact';
  id: string;
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export interface InlineQueryResultGame {
  type: 'game';
  id: string;
  game_short_name: string;
  reply_markup?: InlineKeyboardMarkup;
}

// Cached inline results
export interface InlineQueryResultCachedPhoto {
  type: 'photo';
  id: string;
  photo_file_id: string;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedGif {
  type: 'gif';
  id: string;
  gif_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedMpeg4Gif {
  type: 'mpeg4_gif';
  id: string;
  mpeg4_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedSticker {
  type: 'sticker';
  id: string;
  sticker_file_id: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedDocument {
  type: 'document';
  id: string;
  title: string;
  document_file_id: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVideo {
  type: 'video';
  id: string;
  video_file_id: string;
  title: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  show_caption_above_media?: boolean;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedVoice {
  type: 'voice';
  id: string;
  voice_file_id: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

export interface InlineQueryResultCachedAudio {
  type: 'audio';
  id: string;
  audio_file_id: string;
  caption?: string;
  parse_mode?: string;
  caption_entities?: MessageEntity[];
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
}

// Input content types
export type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | 
                                  InputVenueMessageContent | InputContactMessageContent |
                                  InputInvoiceMessageContent;

export interface InputTextMessageContent {
  message_text: string;
  parse_mode?: string;
  entities?: MessageEntity[];
  link_preview_options?: LinkPreviewOptions;
}

export interface InputLocationMessageContent {
  latitude: number;
  longitude: number;
  horizontal_accuracy?: number;
  live_period?: number;
  heading?: number;
  proximity_alert_radius?: number;
}

export interface InputVenueMessageContent {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  google_place_id?: string;
  google_place_type?: string;
}

export interface InputContactMessageContent {
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
}

export interface InputInvoiceMessageContent {
  title: string;
  description: string;
  payload: string;
  provider_token: string;
  currency: string;
  prices: LabeledPrice[];
  max_tip_amount?: number;
  suggested_tip_amounts?: number[];
  provider_data?: string;
  photo_url?: string;
  photo_size?: number;
  photo_width?: number;
  photo_height?: number;
  need_name?: boolean;
  need_phone_number?: boolean;
  need_email?: boolean;
  need_shipping_address?: boolean;
  send_phone_number_to_provider?: boolean;
  send_email_to_provider?: boolean;
  is_flexible?: boolean;
}

// ============================================================================
// CALLBACK & QUERY TYPES
// ============================================================================

export interface CallbackQuery {
  id: string;
  from: User;
  message?: Message;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
}

// ============================================================================
// BOT COMMAND & SCOPE TYPES
// ============================================================================

export interface BotCommand {
  command: string;
  description: string;
}

export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | 
                              BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators |
                              BotCommandScopeChat | BotCommandScopeChatAdministrators |
                              BotCommandScopeChatMember;

export interface BotCommandScopeDefault {
  type: 'default';
}

export interface BotCommandScopeAllPrivateChats {
  type: 'all_private_chats';
}

export interface BotCommandScopeAllGroupChats {
  type: 'all_group_chats';
}

export interface BotCommandScopeAllChatAdministrators {
  type: 'all_chat_administrators';
}

export interface BotCommandScopeChat {
  type: 'chat';
  chat_id: number | string;
}

export interface BotCommandScopeChatAdministrators {
  type: 'chat_administrators';
  chat_id: number | string;
}

export interface BotCommandScopeChatMember {
  type: 'chat_member';
  chat_id: number | string;
  user_id: number;
}

export interface BotName {
  name: string;
}

export interface BotDescription {
  description: string;
}

export interface BotShortDescription {
  short_description: string;
}

export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault;

export interface MenuButtonCommands {
  type: 'commands';
}

export interface MenuButtonWebApp {
  type: 'web_app';
  text: string;
  web_app: WebAppInfo;
}

export interface MenuButtonDefault {
  type: 'default';
}

// ============================================================================
// RESPONSE & MISC TYPES
// ============================================================================

export interface ResponseParameters {
  migrate_to_chat_id?: number;
  retry_after?: number;
}

/** Represents a file to be uploaded. */
export type InputFile = string; // file_id, URL, or file path

export interface PassportData {
  data: PassportElementData[];
  credentials: PassportElementCredentials;
}

export interface PassportElementData {}
export interface PassportElementCredentials {}

/** This object describes the source or recipient of a transaction. */
export type TransactionPartner = TransactionPartnerUser | TransactionPartnerChat | 
                                 TransactionPartnerAffiliateProgram | TransactionPartnerFragment |
                                 TransactionPartnerTelegramAds | TransactionPartnerTelegramApi |
                                 TransactionPartnerOther;

export interface TransactionPartnerUser {
  type: 'user';
  transaction_type: string;
  user: User;
  affiliate?: AffiliateInfo;
  invoice_payload?: string;
  subscription_period?: number;
  paid_media?: PaidMedia[];
  paid_media_payload?: string;
  gift?: Gift;
  premium_subscription_duration?: number;
}

export interface TransactionPartnerChat {
  type: 'chat';
  chat: Chat;
  gift?: Gift;
}

export interface TransactionPartnerAffiliateProgram {
  type: 'affiliate_program';
  sponsor_user?: User;
  commission_per_mille: number;
}

export interface TransactionPartnerFragment {
  type: 'fragment';
  withdrawal_state?: RevenueWithdrawalState;
}

export interface TransactionPartnerTelegramAds {
  type: 'telegram_ads';
}

export interface TransactionPartnerTelegramApi {
  type: 'telegram_api';
  request_count: number;
}

export interface TransactionPartnerOther {
  type: 'other';
}

export interface AffiliateInfo {
  affiliate_user: User;
  commission_per_mille: number;
}

export type RevenueWithdrawalState = RevenueWithdrawalStatePending | 
                                     RevenueWithdrawalStateSucceeded | 
                                     RevenueWithdrawalStateFailed;

export interface RevenueWithdrawalStatePending {
  type: 'pending';
}

export interface RevenueWithdrawalStateSucceeded {
  type: 'succeeded';
  date: number;
  url: string;
}

export interface RevenueWithdrawalStateFailed {
  type: 'failed';
}

/** Describes a Telegram Star transaction. */
export interface StarTransaction {
  id: string;
  amount: number;
  nanostar_amount?: number;
  date: number;
  source?: TransactionPartner;
  receiver?: TransactionPartner;
}

/** Contains a list of Telegram Star transactions. */
export interface StarTransactions {
  transactions: StarTransaction[];
}

/** Describes an amount of Telegram Stars. */
export interface StarAmount {
  amount: number;
  nanostar_amount?: number;
}

// ============================================================================
// CHAT BOOST TYPES
// ============================================================================

export interface ChatBoost {
  boost_id: string;
  add_date: number;
  expiration_date: number;
  source: ChatBoostSource;
}

export interface ChatBoostSource {
  source: string;
  user?: User;
}

export interface ChatBoostUpdated {
  chat: Chat;
  boost: ChatBoost;
}

export interface ChatBoostRemoved {
  chat: Chat;
  boost_id: string;
  remove_date: number;
  source: ChatBoostSource;
}

export interface UserChatBoosts {
  boosts: ChatBoost[];
}

// ============================================================================
// STORY AREA TYPES
// ============================================================================

export interface StoryAreaPosition {
  x_shift: number;
  y_shift: number;
  width: number;
  height: number;
  rotation_angle: number;
}

export type StoryAreaType = StoryAreaLink | StoryAreaWeather | StoryAreaUniqueGift;

export interface StoryAreaLink {
  type: 'link';
  url: string;
}

export interface StoryAreaWeather {
  type: 'weather';
  temperature: number;
  emoji: string;
  background_color: number;
}

export interface StoryAreaUniqueGift {
  type: 'unique_gift';
  name: string;
}

export interface StoryArea {
  position: StoryAreaPosition;
  type: StoryAreaType;
}

// ============================================================================
// API RESPONSE WRAPPER
// ============================================================================

/** Wrapper for API responses */
export interface TelegramApiResponse<T = unknown> {
  ok: boolean;
  result?: T;
  description?: string;
  error_code?: number;
  parameters?: ResponseParameters;
}