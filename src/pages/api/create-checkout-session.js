import { groupBy } from "lodash";

const stripe = require("stripe")("sk_test_51ItwkaSGrizcP6cuT14EDRxpr1XsUn9qnZiX31GLWWI0pqPooKkbwRBbRRKdwvb0jMK1tbmvub57CTyC0wOIZvcZ0070n7nZal");

export default async (req, res) => {
    const { items, email } = req.body;

    const groupedItems = Object.values(groupBy(items, "id"));

    const transformedItems = groupedItems.map((group) => ({
        description: group[0].description,
        quantity: group.length,
        price_data: {
            currency: "usd",
            unit_amount: group[0].price * 100,
            product_data: {
                name: group[0].title,
                images: [group[0].image],
            },
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ["shr_1ItxEESGrizcP6cuWImSTlRs"],
        shipping_address_collection: {
            allowed_countries: ["GB", "AF", "QA", "RU", "AO", "US", "FR", 'IN', "PL", "RS", "SG", "RO", "PT", "PH", "PK", "NP", "MN", "MX", "LK", "KR", "JP", "IL", "ID", "GR", "IT", "ES", "EG", "DE", "CN", "BR", "BD", "AU", "AE"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image)),
        },
    });

    console.log("session created!", session.id);

    res.status(200).json({ id: session.id });
};