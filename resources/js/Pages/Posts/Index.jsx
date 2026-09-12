import { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Link
import { Link } from '@inertiajs/react';

//import router
import { router } from '@inertiajs/react';

export default function PostIndex({ posts, flash }) {

    // state for modal
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    // open modal
    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setShowModal(true);
    }

    // close modal
    const closeModal = () => {
        setShowModal(false);
        setDeleteId(null);
    }

    // confirm delete
    const confirmDelete = async () => {
        if (deleteId) {
            //send data to server
            await router.delete(`/posts/${deleteId}`);
            setShowModal(false);
            setDeleteId(null);
        }
    }

  return (
    <Layout>
        <div style={{ marginTop: '100px' }}>
            
            <Link href="/posts/create" className="btn btn-success btn-md mb-3">TAMBAH POST</Link>
            
            {flash.message && (
                <div className="alert alert-success border-0 shadow-sm rounded-3">
                    {flash.message}
                </div>
            )}

            <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">TITLE</th>
                                <th scope="col">CONTENT</th>
                                <th scope="col">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                        { posts.map((post, index) => (
                            <tr key={ index }>
                                <td>{ post.title }</td>
                                <td>{ post.content }</td>
                                <td className="text-center">
                                    <Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                    <button onClick={() => handleDeleteClick(post.id)} className="btn btn-sm btn-danger">DELETE</button>
                                </td>
                            </tr>
                        )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Modal Konfirmasi Hapus */}
        {showModal && (
            <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Konfirmasi Hapus</h5>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <p>Apakah Anda yakin ingin menghapus data post ini?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Batal</button>
                            <button type="button" className="btn btn-danger" onClick={confirmDelete}>Hapus</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </Layout>
  )
}
