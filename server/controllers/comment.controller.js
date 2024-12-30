import Comment from '../models/comment.model.js';

export const create_comment = async (req, res) => {
    try {
        const { content, user_id, postId } = req.body;
        const comment = new Comment({ content, user_id, postId });
        await comment.save();
        res.status(201).json(comment);
    }
    catch (error) {
        console.log(error);
    }
}

export const get_all_comments = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id });
        res.status(200).json(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ message: 'Failed to fetch comments', error });
    }
};