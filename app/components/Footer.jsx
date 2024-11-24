import React from 'react'

const Footer = () => {
  return (
    <div className='py-10 text-center'>
        <p>© 2024 All rights reserved.</p>
    </div>
  )
}

export default Footer
export default function Footer() {
  return (
 <footer className="bg-gray-800 text-white py-6">
 <div className="container mx-auto text-center">
 <p className="text-lg font-semibold">Internet Movies Rental Company (IMR)</p>
 <p>Contact us at:</p>
 <ul className="mt-2">
 <li>Email: support@imrcompany.com</li>
 <li>Phone: +1 (123) 456-7890</li>
 <li>Address: 123 Movie Lane, Hollywood, CA</li>
 </ul>
 <p className="mt-4 text-sm">©️ 2024 Internet Movies Rental Company. All rights reserved.</p>
 </div>
 </footer>
  );
 }