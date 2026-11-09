async function validateCreateExpense(body) {
    if (typeof body !== "object" || body === null) {
        return { valid: false, message: 'Incorrect Body' };
    }

    const { description, amount } = body;

    if (amount === undefined) {
        return { valid: false, message: 'Missing amount' };
    }

    if (!Number.isFinite(amount)) {
        return { valid: false, message: 'Amount must be a number' };
    }

    if (amount <= 0) {
        return { valid: false, message: 'Amount must be positive' };
    }

    if (typeof description !== "string") {
        return { valid: false, message: 'Description must be a string' };
    }

    const trimmedDescription = description.trim();

    if (!trimmedDescription) {
        return { valid: false, message: 'Missing description' };
    }

    if (trimmedDescription.length < 3 || trimmedDescription.length > 50) {
        return { valid: false, message: 'Incorrect description' };
    }

    return {
        valid: true,
        value: {
            description: trimmedDescription,
            amount
        }
    };
}

async function validateUpdateExpense(body) {
    if (typeof body !== "object" || body === null) {
        return { valid: false, message: 'Incorrect Body' };
    }

    const { description, amount } = body;

    if (description === undefined && amount === undefined) {
        return { valid: false, message: 'At least one field must be provided' };
    }

    let trimmedDescription;

    if (description !== undefined) {
        if (typeof description !== "string") {
            return { valid: false, message: 'Description must be a string' };
        }

        trimmedDescription = description.trim();

        if (!trimmedDescription) {
            return { valid: false, message: 'Missing description' };
        }

        if (trimmedDescription.length < 3 || trimmedDescription.length > 50) {
            return { valid: false, message: 'Invalid description' };
        }
    }

    if (amount !== undefined) {
        if (!Number.isFinite(amount)) {
            return { valid: false, message: 'Amount must be a number' };
        }

        if (amount <= 0) {
            return { valid: false, message: 'Amount must be positive' };
        }
    }

    const value = {};

    if (description !== undefined) {
        value.description = trimmedDescription;
    }

    if (amount !== undefined) {
        value.amount = amount;
    }

    return {
        valid: true,
        value
    };
}


module.exports = { validateCreateExpense, validateUpdateExpense };