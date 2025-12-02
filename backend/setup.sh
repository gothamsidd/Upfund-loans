#!/bin/bash

# UpFund Loans Backend Setup Script

echo "🚀 Setting up UpFund Loans Backend..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    if [ -f .env.example ]; then
        cp .env.example .env
        echo "✅ .env file created. Please update it with your database credentials."
    else
        echo "❌ .env.example not found. Please create .env manually."
        exit 1
    fi
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma Client
echo "🔧 Generating Prisma Client..."
npx prisma generate

# Check if database is configured
echo "📊 Checking database configuration..."
if grep -q "mysql://username:password" .env; then
    echo "⚠️  Please update DATABASE_URL in .env with your MySQL credentials"
    echo "   Format: mysql://username:password@localhost:3306/upfund_loans"
else
    echo "✅ Database URL configured"
    echo "🔄 Running database migrations..."
    npx prisma migrate dev --name init
fi

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env file with your MySQL database credentials"
echo "2. Run: npm run prisma:migrate (if not already done)"
echo "3. Start server: npm run dev"

