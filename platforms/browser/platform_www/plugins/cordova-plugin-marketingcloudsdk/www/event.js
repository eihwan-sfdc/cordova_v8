cordova.define("cordova-plugin-marketingcloudsdk.SFMCEvent", function(require, exports, module) { /**
 * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getDeviceId()|Android Docs}
 * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledocs/SFMCSdk/8.0/Enums/EventCategory.html|iOS Docs}
 */
const EventCategory = {
    ENGAGEMENT: 'engagement',
    IDENTITY: 'identity',
    SYSTEM: 'system'
};

/**
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getDeviceId()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledocs/SFMCSdk/8.0/Classes/CustomEvent.html|iOS Docs}
   */
class CustomEvent {
    constructor(name, attributes, category = EventCategory.ENGAGEMENT) {
        this.category = category;
        this.name = name;
        this.attributes = attributes;
        this.objType = 'CustomEvent';
    }
}

/**
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getDeviceId()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledocs/SFMCSdk/8.0/Classes/EngagementEvent.html|iOS Docs}
   */
class EngagementEvent extends CustomEvent {
    constructor(name, attributes) {
        super(name, attributes, EventCategory.ENGAGEMENT);
        this.objType = 'EngagementEvent';
    }
}

/**
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getDeviceId()|Android Docs}
   * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledocs/SFMCSdk/8.0/Classes/SystemEvent.html|iOS Docs}
   */
class SystemEvent extends CustomEvent {
    constructor(name, attributes) {
        super(name, attributes, EventCategory.SYSTEM);
        this.objType = 'SystemEvent';
    }
}

class IdentityEvent extends CustomEvent {
    constructor(attributes) {
        super('IdentityEvent', attributes, EventCategory.IDENTITY);
        this.objType = 'IdentityEvent';
    }

    static profileAttributes(profileAttributes) {
        var event = new IdentityEvent();
        event.profileAttributes = profileAttributes;
        return event;
    }

    static profileId(profileId) {
        var event = new IdentityEvent();
        event.profileId = profileId;
        return event;
    }
}

const CartEventType = {
    ADD: 'Add To Cart',
    REMOVE: 'Remove From Cart',
    REPLACE: 'Replace Cart'
};

class CartEvent extends EngagementEvent {
    constructor(name, lineItems) {
        super(name);
        this.lineItems = lineItems;
        this.objType = 'CartEvent';
    }

    static addToCart(lineItem) {
        return new CartEvent(CartEventType.ADD, [lineItem]);
    }

    static removeFromCart(lineItem) {
        return new CartEvent(CartEventType.REMOVE, [lineItem]);
    }

    static replaceCart(lineItems) {
        return new CartEvent(CartEventType.REPLACE, lineItems);
    }
}

const CatalogObjectEventName = {
    COMMENT: 'Comment Catalog Object',
    DETAIL: 'View Catalog Object Detail',
    FAVORITE: 'Favorite Catalog Object',
    SHARE: 'Share Catalog Object',
    REVIEW: 'Review Catalog Object',
    VIEW: 'View Catalog Object',
    QUICK_VIEW: 'Quick View Catalog Object'
};

class CatalogObjectEvent extends EngagementEvent {
    constructor(name, catalogObject) {
        super(name);
        this.catalogObject = catalogObject;
        this.objType = 'CatalogObjectEvent';
    }

    static commentCatalog(catalogObject) {
        return new CatalogObjectEvent(
            CatalogObjectEventName.COMMENT,
            catalogObject
        );
    }

    static detailCatalog(catalogObject) {
        return new CatalogObjectEvent(CatalogObjectEventName.DETAIL, catalogObject);
    }

    static favoriteCatalog(catalogObject) {
        return new CatalogObjectEvent(
            CatalogObjectEventName.FAVORITE,
            catalogObject
        );
    }

    static shareCatalog(catalogObject) {
        return new CatalogObjectEvent(CatalogObjectEventName.SHARE, catalogObject);
    }

    static reviewCatalog(catalogObject) {
        return new CatalogObjectEvent(CatalogObjectEventName.REVIEW, catalogObject);
    }

    static viewCatalog(catalogObject) {
        return new CatalogObjectEvent(CatalogObjectEventName.VIEW, catalogObject);
    }

    static quickViewCatalog(catalogObject) {
        return new CatalogObjectEvent(
            CatalogObjectEventName.QUICK_VIEW,
            catalogObject
        );
    }
}

const OrderEventName = {
    CANCEL: 'Cancel',
    DELIVER: 'Deliver',
    EXCHANGE: 'Exchange',
    PREORDER: 'Preorder',
    PURCHASE: 'Purchase',
    RETURN: 'Return',
    SHIP: 'Ship'
};

class OrderEvent extends EngagementEvent {
    constructor(name, order) {
        super(name);
        this.order = order;
        this.objType = 'OrderEvent';
    }

    static purchase(order) {
        return new OrderEvent(OrderEventName.PURCHASE, order);
    }

    static preorder(order) {
        return new OrderEvent(OrderEventName.PREORDER, order);
    }

    static cancel(order) {
        return new OrderEvent(OrderEventName.CANCEL, order);
    }

    static ship(order) {
        return new OrderEvent(OrderEventName.SHIP, order);
    }

    static deliver(order) {
        return new OrderEvent(OrderEventName.DELIVER, order);
    }

    static returnOrder(order) {
        return new OrderEvent(OrderEventName.RETURN, order);
    }

    static exchange(order) {
        return new OrderEvent(OrderEventName.EXCHANGE, order);
    }
}

class CatalogObject {
    constructor(type, id, attributes, relatedCatalogObjects) {
        this.type = type;
        this.id = id;
        this.attributes = attributes;
        this.relatedCatalogObjects = relatedCatalogObjects;
        this.objType = 'CatalogObject';
    }
}

class LineItem {
    constructor(
        catalogObjectType,
        catalogObjectId,
        quantity,
        price,
        currency,
        attributes = {}
    ) {
        this.catalogObjectType = catalogObjectType;
        this.catalogObjectId = catalogObjectId;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.attributes = attributes;
        this.objType = 'LineItem';
    }
}

class Order {
    constructor(id, lineItems, totalValue, currency, attributes = {}) {
        this.id = id;
        this.lineItems = lineItems;
        this.totalValue = totalValue;
        this.currency = currency;
        this.attributes = attributes;
        this.objType = 'Order';
    }
}

module.exports = {
    EventCategory,
    CustomEvent,
    EngagementEvent,
    SystemEvent,
    IdentityEvent,
    CartEventType,
    CartEvent,
    CatalogObjectEventName,
    CatalogObjectEvent,
    OrderEventName,
    OrderEvent,
    CatalogObject,
    LineItem,
    Order
};

});
