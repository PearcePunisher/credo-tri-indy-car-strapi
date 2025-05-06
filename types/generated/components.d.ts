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
    displayName: 'car_images';
    icon: 'car';
  };
  attributes: {
    car_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.car-chassis': SharedCarChassis;
      'shared.car-construction': SharedCarConstruction;
      'shared.car-images': SharedCarImages;
      'shared.car-materials': SharedCarMaterials;
      'shared.car-other-specs': SharedCarOtherSpecs;
      'shared.driver-socials': SharedDriverSocials;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
