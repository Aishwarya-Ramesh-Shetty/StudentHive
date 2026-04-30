/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User APIs
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register user
 *     tags: [Users]
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 */

/**
 * @swagger
 * /api/users/favorites:
 *   get:
 *     summary: Get favorites
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /api/users/favorites/{propertyId}:
 *   post:
 *     summary: Add to favorites
 *     tags: [Users]
 */

/**
 * @swagger
 * /api/users/favorites/{propertyId}:
 *   delete:
 *     summary: Remove from favorites
 *     tags: [Users]
 */