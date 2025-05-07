import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCarChassis extends Struct.ComponentSchema {
  collectionName: 'components_shared_car_chasses';
  info: {
    displayName: 'car_chassis';
    icon: 'dashboard';
  };
  attributes: {
    car_chasis_detail: Schema.Attribute.String;
  };
}

export interface SharedCarConstruction extends Struct.ComponentSchema {
  collectionName: 'components_shared_car_constructions';
  info: {
    displayName: 'car_construction';
    icon: 'bulletList';
  };
  attributes: {
    car_construction_detail: Schema.Attribute.String;
  };
}

export interface SharedCarImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_car_images';
  info: {
    description: '';
    displayName: 'car_images';
    icon: 'car';
  };
  attributes: {
    car_image_hero: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    car_image_side: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedCarMaterials extends Struct.ComponentSchema {
  collectionName: 'components_shared_car_materials';
  info: {
    displayName: 'car_materials';
    icon: 'gate';
  };
  attributes: {
    car_material_detail: Schema.Attribute.String;
  };
}

export interface SharedCarOtherSpecs extends Struct.ComponentSchema {
  collectionName: 'components_shared_car_other_specs';
  info: {
    displayName: 'car_other_specs';
    icon: 'bulletList';
  };
  attributes: {
    car_other_spec_detail: Schema.Attribute.String;
  };
}

export interface SharedDriverRecord extends Struct.ComponentSchema {
  collectionName: 'components_shared_driver_records';
  info: {
    displayName: 'driver_record';
    icon: 'book';
  };
  attributes: {
    record_date: Schema.Attribute.Date;
    record_details: Schema.Attribute.String;
  };
}

export interface SharedDriverSocials extends Struct.ComponentSchema {
  collectionName: 'components_shared_driver_socials';
  info: {
    displayName: 'driver_socials';
    icon: 'cast';
  };
  attributes: {
    driver_social_length: Schema.Attribute.String;
    social_platform: Schema.Attribute.Enumeration<
      [
        'Facebook',
        'YouTube',
        'WhatsApp',
        'Instagram',
        'WeChat',
        'TikTok',
        'Telegram',
        'Snapchat',
        'X (formerly Twitter)',
        'Pinterest',
        'Reddit',
        'LinkedIn',
        'Discord',
        'Threads',
        'Kuaishou',
        'QQ',
        'Quora',
        'Tumblr',
        'Line',
        'BeReal',
        'Twitch',
        'Viber',
        'VK (VKontakte)',
        'Mastodon',
        'Clubhouse',
      ]
    >;
  };
}

export interface SharedEventDetailCallouts extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_detail_callouts';
  info: {
    displayName: 'event_detail_callouts';
    icon: 'bulletList';
  };
  attributes: {
    event_detail_callout_title: Schema.Attribute.String;
    event_detail_callouts_details: Schema.Attribute.String;
  };
}

export interface SharedEventDownloadables extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_downloadables';
  info: {
    displayName: 'event_downloadables';
    icon: 'archive';
  };
  attributes: {
    event_downloadables_description: Schema.Attribute.Text;
    event_downloadables_file: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    event_downloadables_title: Schema.Attribute.String;
  };
}

export interface SharedEventFactFile extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_fact_files';
  info: {
    displayName: 'event_fact_file';
    icon: 'apps';
  };
  attributes: {
    event_fact_file_details: Schema.Attribute.Blocks;
    event_fact_file_title: Schema.Attribute.String;
  };
}

export interface SharedEventSchedule extends Struct.ComponentSchema {
  collectionName: 'components_shared_event_schedules';
  info: {
    displayName: 'event_schedule';
    icon: 'bulletList';
  };
  attributes: {
    event_schedule_date_date: Schema.Attribute.Date;
    event_schedule_date_details: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTeamLogos extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_logos';
  info: {
    displayName: 'team_logos';
    icon: 'monitor';
  };
  attributes: {
    team_banner_logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    team_square_logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedTeamSponsor extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_sponsors';
  info: {
    description: '';
    displayName: 'team_sponsor';
  };
  attributes: {
    sponsors: Schema.Attribute.Relation<'oneToMany', 'api::sponsor.sponsor'>;
  };
}

export interface SharedVenueDirectionSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_venue_direction_sections';
  info: {
    displayName: 'venue_direction_section';
    icon: 'attachment';
  };
  attributes: {
    venue_direction_section_details: Schema.Attribute.Blocks;
    venue_direction_section_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.car-chassis': SharedCarChassis;
      'shared.car-construction': SharedCarConstruction;
      'shared.car-images': SharedCarImages;
      'shared.car-materials': SharedCarMaterials;
      'shared.car-other-specs': SharedCarOtherSpecs;
      'shared.driver-record': SharedDriverRecord;
      'shared.driver-socials': SharedDriverSocials;
      'shared.event-detail-callouts': SharedEventDetailCallouts;
      'shared.event-downloadables': SharedEventDownloadables;
      'shared.event-fact-file': SharedEventFactFile;
      'shared.event-schedule': SharedEventSchedule;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.team-logos': SharedTeamLogos;
      'shared.team-sponsor': SharedTeamSponsor;
      'shared.venue-direction-section': SharedVenueDirectionSection;
    }
  }
}
