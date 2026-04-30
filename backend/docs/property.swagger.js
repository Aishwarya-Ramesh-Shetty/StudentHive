/**
 * @swagger
 * tags:
 *   name: Property
 *   description: Property APIs
 */

/**
 * @swagger
 * /api/property:
 *   post:
 *     summary: Create property
 *     tags: [Property]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       201:
 *         description: Property created
 */

/**
 * @swagger
 * /api/property:
 *   get:
 *     summary: Get properties
 *     tags: [Property]
 *     responses:
 *       200:
 *         description: List of properties
 */

/**
 * @swagger
 * /api/property/{id}:
 *   put:
 *     summary: Update property
 *     tags: [Property]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */

/**
 * @swagger
 * /api/property/{id}:
 *   delete:
 *     summary: Delete property
 *     tags: [Property]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */