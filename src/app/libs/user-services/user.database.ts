import prisma from '@/app/libs/prisma.connector';

interface CreateUser {
    name: string;
    email: string;
    acceptTermsAndConditions: boolean;
}

interface UpdateUser {
    id: number;
    name: string;
    email: string;
}

export async function createUser(user: CreateUser) {
    if (user.acceptTermsAndConditions) {
        return await prisma.user.create({
            data: user,
        });
    } else {
        return new Error('User must accept terms!');
    }
}

export async function updateUsername(user: UpdateUser) {
    return await prisma.user.update({
        where: { id: user.id },
        data: user,
    });
}
