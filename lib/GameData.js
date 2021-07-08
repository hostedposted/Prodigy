"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndigoType = exports.HairType = exports.GenericType = exports.GameFeedType = exports.Title = exports.ActionEnum = exports.EventAction = exports.FSMType = exports.ConditionType = exports.ParametersType = exports.Ease = exports.Path = exports.Layer = exports.Game = exports.EventName = exports.EventDataType = exports.DurationMSEnum = exports.DefeatZone = exports.Config = exports.Character = exports.Animation = exports.FontStyleType = exports.NameEnum = exports.FaceType = exports.FaceName = exports.FlavorText = exports.EyeColorType = exports.EmoteType = exports.DungeonType = exports.DormbgType = exports.StickyType = exports.HorizontalType = exports.Category = exports.DialogueType = exports.FrameName = exports.Zone = exports.BountyNameType = exports.TemplateType = exports.BossType = exports.AssetTypeEnum = exports.AstralElement = exports.TentacledType = exports.TypeElement = exports.BgmType = exports.AtlasType = exports.FluffyType = exports.PurpleType = exports.AdType = exports.ButtonName = exports.EarthElement = void 0;
exports.UIType = exports.FluffyColor = exports.FluffyOverStateName = exports.PurpleOverStateName = exports.SliceType = exports.LayoutConfigType = exports.PurpleColor = exports.AtlasName = exports.BoundsAlignH = exports.MailKey = exports.SpellRelicType = exports.TravelEasing = exports.EndEasing = exports.CharToAnimation = exports.CharFromAnimation = exports.SpellType = exports.TargetType = exports.Type = exports.SfxType = exports.RelicType = exports.ElementType = exports.Life = exports.NicknameType = exports.NameType = exports.MathTownInteriorType = exports.MathTownDecorType = exports.KeyType = exports.ItemTableType = exports.IconEnum = exports.IndecentType = exports.TargetEnum = exports.Transform = void 0;
var EarthElement;
(function (EarthElement) {
    EarthElement["Astral"] = "astral";
    EarthElement["Earth"] = "earth";
    EarthElement["Empty"] = "";
    EarthElement["Fire"] = "fire";
    EarthElement["Ice"] = "ice";
    EarthElement["IceFire"] = "ice & fire";
    EarthElement["Mech"] = "mech";
    EarthElement["Plant"] = "plant";
    EarthElement["Shadow"] = "shadow";
    EarthElement["Special"] = "special";
    EarthElement["Storm"] = "storm";
    EarthElement["Water"] = "water";
    EarthElement["Wizard"] = "wizard";
})(EarthElement = exports.EarthElement || (exports.EarthElement = {}));
var ButtonName;
(function (ButtonName) {
    ButtonName["Empty"] = "";
    ButtonName["GoNowButton"] = "goNowButton";
    ButtonName["PlayVideoButton"] = "playVideoButton";
    ButtonName["WatchVideoButton"] = "watchVideoButton";
})(ButtonName = exports.ButtonName || (exports.ButtonName = {}));
var AdType;
(function (AdType) {
    AdType["Ad"] = "ad";
})(AdType = exports.AdType || (exports.AdType = {}));
var PurpleType;
(function (PurpleType) {
    PurpleType["Atlas"] = "atlas";
    PurpleType["Multiple"] = "multiple";
    PurpleType["SingleImage"] = "singleImage";
})(PurpleType = exports.PurpleType || (exports.PurpleType = {}));
var FluffyType;
(function (FluffyType) {
    FluffyType["Affix"] = "affix";
})(FluffyType = exports.FluffyType || (exports.FluffyType = {}));
var AtlasType;
(function (AtlasType) {
    AtlasType["Atlas"] = "atlas";
    AtlasType["StreamedMap"] = "streamedMap";
    AtlasType["TiledMap"] = "tiledMap";
})(AtlasType = exports.AtlasType || (exports.AtlasType = {}));
var BgmType;
(function (BgmType) {
    BgmType["Bgm"] = "bgm";
})(BgmType = exports.BgmType || (exports.BgmType = {}));
var TypeElement;
(function (TypeElement) {
    TypeElement["Boots"] = "boots";
    TypeElement["Currency"] = "currency";
    TypeElement["Dorm"] = "dorm";
    TypeElement["Empty"] = "";
    TypeElement["Follow"] = "follow";
    TypeElement["Fossil"] = "fossil";
    TypeElement["GiftBox"] = "giftBox";
    TypeElement["Gold"] = "gold";
    TypeElement["Hat"] = "hat";
    TypeElement["Item"] = "item";
    TypeElement["ORB"] = "orb";
    TypeElement["Outfit"] = "outfit";
    TypeElement["Prefab"] = "prefab";
    TypeElement["Weapon"] = "weapon";
})(TypeElement = exports.TypeElement || (exports.TypeElement = {}));
var TentacledType;
(function (TentacledType) {
    TentacledType["Cover"] = "cover";
    TentacledType["Empty"] = "";
    TentacledType["Hat"] = "Hat";
    TentacledType["Mask"] = "mask";
    TentacledType["Wrap"] = "wrap";
})(TentacledType = exports.TentacledType || (exports.TentacledType = {}));
var AstralElement;
(function (AstralElement) {
    AstralElement["Astral"] = "astral";
    AstralElement["Ice"] = "ice";
    AstralElement["Shadow"] = "shadow";
})(AstralElement = exports.AstralElement || (exports.AstralElement = {}));
var AssetTypeEnum;
(function (AssetTypeEnum) {
    AssetTypeEnum["Atlas"] = "atlas";
    AssetTypeEnum["Spine"] = "spine";
    AssetTypeEnum["Spritesheet"] = "spritesheet";
})(AssetTypeEnum = exports.AssetTypeEnum || (exports.AssetTypeEnum = {}));
var BossType;
(function (BossType) {
    BossType["Boss"] = "boss";
})(BossType = exports.BossType || (exports.BossType = {}));
var TemplateType;
(function (TemplateType) {
    TemplateType["PetName"] = "pet-name";
})(TemplateType = exports.TemplateType || (exports.TemplateType = {}));
var BountyNameType;
(function (BountyNameType) {
    BountyNameType["BountyName"] = "bountyName";
})(BountyNameType = exports.BountyNameType || (exports.BountyNameType = {}));
var Zone;
(function (Zone) {
    Zone["Any"] = "any";
    Zone["Empty"] = "";
})(Zone = exports.Zone || (exports.Zone = {}));
var FrameName;
(function (FrameName) {
    FrameName["Empty"] = "";
    FrameName["Face0"] = "face_0";
    FrameName["Face1"] = "face_1";
    FrameName["Face10"] = "face_10";
    FrameName["Face15"] = "face_15";
    FrameName["Face2"] = "face_2";
    FrameName["Face3"] = "face_3";
    FrameName["Face4"] = "face_4";
    FrameName["Face5"] = "face_5";
    FrameName["Face6"] = "face_6";
    FrameName["Face7"] = "face_7";
    FrameName["Face8"] = "face_8";
    FrameName["Face9"] = "face_9";
})(FrameName = exports.FrameName || (exports.FrameName = {}));
var DialogueType;
(function (DialogueType) {
    DialogueType["Dialogue"] = "dialogue";
})(DialogueType = exports.DialogueType || (exports.DialogueType = {}));
var Category;
(function (Category) {
    Category["Comfy"] = "Comfy";
    Category["Items"] = "Items";
    Category["Lamps"] = "Lamps";
    Category["Plants"] = "Plants";
    Category["Storage"] = "Storage";
    Category["Surface"] = "Surface";
    Category["Wall"] = "Wall";
})(Category = exports.Category || (exports.Category = {}));
var HorizontalType;
(function (HorizontalType) {
    HorizontalType["Atlas"] = "atlas";
    HorizontalType["SingleImage"] = "singleImage";
    HorizontalType["Spine"] = "spine";
})(HorizontalType = exports.HorizontalType || (exports.HorizontalType = {}));
var StickyType;
(function (StickyType) {
    StickyType["Multiple"] = "multiple";
    StickyType["Spine"] = "spine";
})(StickyType = exports.StickyType || (exports.StickyType = {}));
var DormbgType;
(function (DormbgType) {
    DormbgType["Dormbg"] = "dormbg";
})(DormbgType = exports.DormbgType || (exports.DormbgType = {}));
var DungeonType;
(function (DungeonType) {
    DungeonType["Dungeon"] = "dungeon";
})(DungeonType = exports.DungeonType || (exports.DungeonType = {}));
var EmoteType;
(function (EmoteType) {
    EmoteType["Emote"] = "emote";
})(EmoteType = exports.EmoteType || (exports.EmoteType = {}));
var EyeColorType;
(function (EyeColorType) {
    EyeColorType["EyeColor"] = "eyeColor";
    EyeColorType["HairColor"] = "hairColor";
})(EyeColorType = exports.EyeColorType || (exports.EyeColorType = {}));
var FlavorText;
(function (FlavorText) {
    FlavorText["BuyingThisWillChangeYourFaceStyle"] = "Buying this will change your face style!";
    FlavorText["BuyingThisWillChangeYourSkinTone"] = "Buying this will change your skin tone!";
    FlavorText["FlavorTextBuyingThisWillChangeYourFaceStyle"] = "Buying this will change your face style.";
})(FlavorText = exports.FlavorText || (exports.FlavorText = {}));
var FaceName;
(function (FaceName) {
    FaceName["Empty"] = "";
    FaceName["Face17"] = "Face-17";
    FaceName["Face18"] = "Face-18";
})(FaceName = exports.FaceName || (exports.FaceName = {}));
var FaceType;
(function (FaceType) {
    FaceType["Face"] = "face";
    FaceType["SkinColor"] = "skinColor";
})(FaceType = exports.FaceType || (exports.FaceType = {}));
var NameEnum;
(function (NameEnum) {
    NameEnum["Legacy"] = "legacy";
    NameEnum["Pet"] = "pet";
    NameEnum["Spine"] = "spine";
})(NameEnum = exports.NameEnum || (exports.NameEnum = {}));
var FontStyleType;
(function (FontStyleType) {
    FontStyleType["FontStyle"] = "fontStyle";
})(FontStyleType = exports.FontStyleType || (exports.FontStyleType = {}));
var Animation;
(function (Animation) {
    Animation["Idle"] = "idle";
    Animation["Lantern1Glow"] = "lantern-1-glow";
    Animation["Lantern2Glow"] = "lantern-2-glow";
})(Animation = exports.Animation || (exports.Animation = {}));
var Character;
(function (Character) {
    Character["Florian"] = "florian";
    Character["Gale"] = "gale";
    Character["Merchant"] = "merchant";
    Character["Noot"] = "noot";
    Character["Pippet"] = "pippet";
    Character["Puppetmaster"] = "puppetmaster";
})(Character = exports.Character || (exports.Character = {}));
var Config;
(function (Config) {
    Config["GoldenPageConfig"] = "$goldenPageConfig";
    Config["MonsterConfig"] = "$monsterConfig";
    Config["PageConfig"] = "$pageConfig";
})(Config = exports.Config || (exports.Config = {}));
var DefeatZone;
(function (DefeatZone) {
    DefeatZone["AcademyCR2"] = "academy-CR2";
    DefeatZone["AcademyGH1"] = "academy-GH1";
    DefeatZone["AcademyGH2"] = "academy-GH2";
    DefeatZone["AcademyGH3"] = "academy-GH3";
    DefeatZone["EarthtowerCR"] = "earthtower-CR";
    DefeatZone["EarthtowerWR"] = "earthtower-WR";
    DefeatZone["HouseExterior"] = "house-exterior";
    DefeatZone["IcetowerCR"] = "icetower-CR";
    DefeatZone["IcetowerWR"] = "icetower-WR";
    DefeatZone["LamplightB3"] = "lamplight-B3";
    DefeatZone["Map"] = "$map";
    DefeatZone["ReturnMap"] = "$returnMap";
    DefeatZone["TowerTownA0"] = "tower_town-A0";
})(DefeatZone = exports.DefeatZone || (exports.DefeatZone = {}));
var DurationMSEnum;
(function (DurationMSEnum) {
    DurationMSEnum["BannerShowTimeMS"] = "$bannerShowTimeMS";
    DurationMSEnum["CardFadeDuration"] = "$cardFadeDuration";
})(DurationMSEnum = exports.DurationMSEnum || (exports.DurationMSEnum = {}));
var EventDataType;
(function (EventDataType) {
    EventDataType["AcademyArchives"] = "AcademyArchives";
    EventDataType["Tutorial2"] = "tutorial_2";
    EventDataType["TutorialSteps1"] = "tutorial_steps_1";
})(EventDataType = exports.EventDataType || (exports.EventDataType = {}));
var EventName;
(function (EventName) {
    EventName["GameComplete"] = "game_complete";
})(EventName = exports.EventName || (exports.EventName = {}));
var Game;
(function (Game) {
    Game["Game"] = "$game";
})(Game = exports.Game || (exports.Game = {}));
var Layer;
(function (Layer) {
    Layer["Content"] = "content";
})(Layer = exports.Layer || (exports.Layer = {}));
var Path;
(function (Path) {
    Path["Path"] = "$path";
    Path["Pathfinder"] = "$pathfinder";
    Path["PlayerPathfinder"] = "$playerPathfinder";
})(Path = exports.Path || (exports.Path = {}));
var Ease;
(function (Ease) {
    Ease["Linear"] = "Linear";
    Ease["Quad"] = "Quad";
    Ease["QuadEaseOut"] = "Quad.easeOut";
})(Ease = exports.Ease || (exports.Ease = {}));
var ParametersType;
(function (ParametersType) {
    ParametersType["GameCompleteV3"] = "game_complete_v3";
})(ParametersType = exports.ParametersType || (exports.ParametersType = {}));
var ConditionType;
(function (ConditionType) {
    ConditionType["Equals"] = "equals";
    ConditionType["GreaterThan"] = "greaterThan";
    ConditionType["NotEquals"] = "notEquals";
})(ConditionType = exports.ConditionType || (exports.ConditionType = {}));
var FSMType;
(function (FSMType) {
    FSMType["FSM"] = "fsm";
})(FSMType = exports.FSMType || (exports.FSMType = {}));
var EventAction;
(function (EventAction) {
    EventAction["Empty"] = "";
    EventAction["MemberAd"] = "memberAd";
    EventAction["Teleport"] = "teleport";
})(EventAction = exports.EventAction || (exports.EventAction = {}));
var ActionEnum;
(function (ActionEnum) {
    ActionEnum["CheckOutLamplightTown"] = "Check out Lamplight Town";
    ActionEnum["CheckOutZoneName"] = "Check out ${zoneName}";
    ActionEnum["Empty"] = "";
})(ActionEnum = exports.ActionEnum || (exports.ActionEnum = {}));
var Title;
(function (Title) {
    Title["Empty"] = "";
    Title["YourFriendBoughtANewItem"] = "Your friend bought a new item!";
    Title["YourFriendWonANewItem"] = "Your friend won a new item!";
})(Title = exports.Title || (exports.Title = {}));
var GameFeedType;
(function (GameFeedType) {
    GameFeedType["GameFeed"] = "gameFeed";
})(GameFeedType = exports.GameFeedType || (exports.GameFeedType = {}));
var GenericType;
(function (GenericType) {
    GenericType["Generic"] = "generic";
})(GenericType = exports.GenericType || (exports.GenericType = {}));
var HairType;
(function (HairType) {
    HairType["Hair"] = "hair";
})(HairType = exports.HairType || (exports.HairType = {}));
var IndigoType;
(function (IndigoType) {
    IndigoType["CritChance"] = "critChance";
    IndigoType["Damage"] = "damage";
    IndigoType["ElementalResistance"] = "elementalResistance";
})(IndigoType = exports.IndigoType || (exports.IndigoType = {}));
var Transform;
(function (Transform) {
    Transform["Dorm"] = "dorm";
    Transform["Follow"] = "follow";
    Transform["Pet"] = "pet";
})(Transform = exports.Transform || (exports.Transform = {}));
var TargetEnum;
(function (TargetEnum) {
    TargetEnum["Team"] = "team";
    TargetEnum["Unit"] = "unit";
})(TargetEnum = exports.TargetEnum || (exports.TargetEnum = {}));
var IndecentType;
(function (IndecentType) {
    IndecentType["Consumable"] = "consumable";
    IndecentType["Food"] = "food";
    IndecentType["Potion"] = "potion";
})(IndecentType = exports.IndecentType || (exports.IndecentType = {}));
var IconEnum;
(function (IconEnum) {
    IconEnum["Empty"] = "";
    IconEnum["Item110"] = "item/110";
})(IconEnum = exports.IconEnum || (exports.IconEnum = {}));
var ItemTableType;
(function (ItemTableType) {
    ItemTableType["ItemTable"] = "itemTable";
})(ItemTableType = exports.ItemTableType || (exports.ItemTableType = {}));
var KeyType;
(function (KeyType) {
    KeyType["Key"] = "key";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
var MathTownDecorType;
(function (MathTownDecorType) {
    MathTownDecorType["MathTownDecor"] = "mathTownDecor";
    MathTownDecorType["MathTownFrame"] = "mathTownFrame";
})(MathTownDecorType = exports.MathTownDecorType || (exports.MathTownDecorType = {}));
var MathTownInteriorType;
(function (MathTownInteriorType) {
    MathTownInteriorType["MathTownInterior"] = "mathTownInterior";
})(MathTownInteriorType = exports.MathTownInteriorType || (exports.MathTownInteriorType = {}));
var NameType;
(function (NameType) {
    NameType["Name"] = "name";
})(NameType = exports.NameType || (exports.NameType = {}));
var NicknameType;
(function (NicknameType) {
    NicknameType["Nickname"] = "nickname";
})(NicknameType = exports.NicknameType || (exports.NicknameType = {}));
var Life;
(function (Life) {
    Life["A"] = "A-";
    Life["B"] = "B";
    Life["C"] = "C";
    Life["LifeA"] = "A";
    Life["LifeB"] = "B+";
    Life["LifeC"] = "C-";
    Life["PurpleA"] = "A+";
    Life["PurpleB"] = "B-";
    Life["PurpleC"] = "C+";
})(Life = exports.Life || (exports.Life = {}));
var ElementType;
(function (ElementType) {
    ElementType["Button"] = "Button";
    ElementType["ButtonToggle"] = "ButtonToggle";
    ElementType["Graphic"] = "Graphic";
    ElementType["InputFieldElement"] = "InputFieldElement";
    ElementType["Mask"] = "Mask";
    ElementType["PhaserButtonWrapper"] = "PhaserButtonWrapper";
    ElementType["ScrollBar"] = "ScrollBar";
    ElementType["ScrollView"] = "ScrollView";
    ElementType["SlicedBanner"] = "SlicedBanner";
    ElementType["SlicedGraphic"] = "SlicedGraphic";
    ElementType["Slider"] = "Slider";
    ElementType["SpineUI"] = "SpineUI";
    ElementType["Tab"] = "Tab";
    ElementType["TabButton"] = "TabButton";
    ElementType["Text"] = "Text";
    ElementType["UIElement"] = "UIElement";
    ElementType["VideoGraphic"] = "VideoGraphic";
    ElementType["WebFontText"] = "WebFontText";
    ElementType["WoodSlicedPanel"] = "WoodSlicedPanel";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
var RelicType;
(function (RelicType) {
    RelicType["Relic"] = "relic";
})(RelicType = exports.RelicType || (exports.RelicType = {}));
var SfxType;
(function (SfxType) {
    SfxType["Sfx"] = "sfx";
})(SfxType = exports.SfxType || (exports.SfxType = {}));
var Type;
(function (Type) {
    Type["Aoa"] = "aoa";
    Type["Aoe"] = "aoe";
    Type["Beam"] = "beam";
    Type["Projectile"] = "projectile";
})(Type = exports.Type || (exports.Type = {}));
var TargetType;
(function (TargetType) {
    TargetType["Aoe"] = "aoe";
    TargetType["Single"] = "single";
})(TargetType = exports.TargetType || (exports.TargetType = {}));
var SpellType;
(function (SpellType) {
    SpellType["EpicAttack"] = "epic-attack";
    SpellType["Spell"] = "spell";
})(SpellType = exports.SpellType || (exports.SpellType = {}));
var CharFromAnimation;
(function (CharFromAnimation) {
    CharFromAnimation["None"] = "none";
    CharFromAnimation["Vibrate"] = "vibrate";
})(CharFromAnimation = exports.CharFromAnimation || (exports.CharFromAnimation = {}));
var CharToAnimation;
(function (CharToAnimation) {
    CharToAnimation["Damage"] = "damage";
    CharToAnimation["None"] = "none";
})(CharToAnimation = exports.CharToAnimation || (exports.CharToAnimation = {}));
var EndEasing;
(function (EndEasing) {
    EndEasing["ElasticIn"] = "Elastic.In";
    EndEasing["LinearNone"] = "Linear.None";
})(EndEasing = exports.EndEasing || (exports.EndEasing = {}));
var TravelEasing;
(function (TravelEasing) {
    TravelEasing["LinearNone"] = "Linear.None";
    TravelEasing["QuadraticIn"] = "Quadratic.In";
})(TravelEasing = exports.TravelEasing || (exports.TravelEasing = {}));
var SpellRelicType;
(function (SpellRelicType) {
    SpellRelicType["SpellRelic"] = "spellRelic";
})(SpellRelicType = exports.SpellRelicType || (exports.SpellRelicType = {}));
var MailKey;
(function (MailKey) {
    MailKey["TitanReward"] = "titanReward";
})(MailKey = exports.MailKey || (exports.MailKey = {}));
var BoundsAlignH;
(function (BoundsAlignH) {
    BoundsAlignH["Bottom"] = "bottom";
    BoundsAlignH["Center"] = "center";
    BoundsAlignH["Left"] = "left";
    BoundsAlignH["Middle"] = "middle";
    BoundsAlignH["Right"] = "right";
    BoundsAlignH["Top"] = "top";
})(BoundsAlignH = exports.BoundsAlignH || (exports.BoundsAlignH = {}));
var AtlasName;
(function (AtlasName) {
    AtlasName["Empty"] = "";
    AtlasName["UIShared"] = "ui-shared";
})(AtlasName = exports.AtlasName || (exports.AtlasName = {}));
var PurpleColor;
(function (PurpleColor) {
    PurpleColor["C16A2C"] = "#c16a2c";
    PurpleColor["The363636"] = "#363636";
    PurpleColor["The3687Ba"] = "#3687ba";
})(PurpleColor = exports.PurpleColor || (exports.PurpleColor = {}));
var LayoutConfigType;
(function (LayoutConfigType) {
    LayoutConfigType["Horizontal"] = "horizontal";
    LayoutConfigType["Vertical"] = "vertical";
})(LayoutConfigType = exports.LayoutConfigType || (exports.LayoutConfigType = {}));
var SliceType;
(function (SliceType) {
    SliceType["Nine"] = "nine";
    SliceType["NineScale"] = "nineScale";
    SliceType["Three"] = "three";
    SliceType["ThreeScale"] = "threeScale";
})(SliceType = exports.SliceType || (exports.SliceType = {}));
var PurpleOverStateName;
(function (PurpleOverStateName) {
    PurpleOverStateName["WatchNowGraphicOverContainer"] = "watchNowGraphicOverContainer";
})(PurpleOverStateName = exports.PurpleOverStateName || (exports.PurpleOverStateName = {}));
var FluffyOverStateName;
(function (FluffyOverStateName) {
    FluffyOverStateName["GoNowGraphicOver"] = "goNowGraphicOver";
    FluffyOverStateName["WatchVideoGraphicOver"] = "watchVideoGraphicOver";
})(FluffyOverStateName = exports.FluffyOverStateName || (exports.FluffyOverStateName = {}));
var FluffyColor;
(function (FluffyColor) {
    FluffyColor["Black"] = "black";
    FluffyColor["E83E45"] = "#E83E45";
    FluffyColor["Ffffff"] = "#ffffff";
    FluffyColor["The000000"] = "#000000";
    FluffyColor["The363636"] = "#363636";
    FluffyColor["The372623"] = "#372623";
    FluffyColor["The865Fb1"] = "#865FB1";
})(FluffyColor = exports.FluffyColor || (exports.FluffyColor = {}));
var UIType;
(function (UIType) {
    UIType["UI"] = "ui";
})(UIType = exports.UIType || (exports.UIType = {}));
